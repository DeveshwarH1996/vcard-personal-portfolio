import re

with open("temp_legacy_html/index.html", "r") as f:
    lines = f.readlines()

def clean_jsx(html_lines):
    html = "".join(html_lines)
    html = html.replace('class="', 'className="')
    html = html.replace('for="', 'htmlFor="')
    html = html.replace('</br>', '')
    # close img tags
    html = re.sub(r'(<img[^>]+)(?<!/)>', r'\1 />', html)
    # close input tags
    html = re.sub(r'(<input[^>]+)(?<!/)>', r'\1 />', html)
    # close br tags
    html = re.sub(r'<br>', r'<br />', html)
    # style string to object (simplified, there might be style="width: 95%;" -> style={{ width: '95%' }})
    def style_replacer(match):
        style_str = match.group(1)
        # very simple conversion for "width: 95%;" etc.
        styles = []
        for pair in style_str.split(";"):
            if not pair.strip(): continue
            k, v = pair.split(":")
            k = k.strip()
            # camelCase k mapping if needed (not needed for 'width')
            if "-" in k:
                parts = k.split("-")
                k = parts[0] + "".join(x.title() for x in parts[1:])
            
            v = v.strip().replace('"', "'")
            styles.append(f"{k}: '{v}'")
        return 'style={{ ' + ", ".join(styles) + ' }}'
    html = re.sub(r'style="([^"]+)"', style_replacer, html)
    return html

components = {
    "Sidebar": {"path": "src/components/Sidebar.jsx", "lines": (39, 124)},
    "Navbar": {"path": "src/components/Navbar.jsx", "lines": (139, 162), "pre": "import { NavLink } from 'react-router-dom';\n"},
    "About": {"path": "src/pages/About.jsx", "lines": (171, 270)},
    "Resume": {"path": "src/pages/Resume.jsx", "lines": (279, 440)},
    "Portfolio": {"path": "src/pages/Portfolio.jsx", "lines": (449, 590)},
    "BlogList": {"path": "src/pages/BlogList.jsx", "lines": (599, 718)}
}

for name, meta in components.items():
    start, end = meta["lines"]
    html_block = lines[start:end]
    jsx = clean_jsx(html_block)
    
    # Custom post-processing per component
    if name == "Sidebar":
        pass
    elif name == "Navbar":
        # Replace buttons with NavLink
        jsx = re.sub(r'<button className="navbar-link[^"]*".*?>([^<]+)</button>', r'<NavLink to="/\1" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}>\1</NavLink>', jsx)
        # Fix the about to point to / instead of /About
        jsx = jsx.replace('to="/About"', 'to="/"')
        jsx = jsx.replace('to="/Resume"', 'to="/resume"')
        jsx = jsx.replace('to="/Portfolio"', 'to="/portfolio"')
        jsx = jsx.replace('to="/Blog"', 'to="/blog"')
    elif name == "Portfolio":
        # Replace <a> links with Links or let them be <a> for now if they link to /blog/...
        pass
    
    # Imports
    imports = meta.get("pre", "")
    if name in ["Portfolio", "BlogList"]:
        imports += "import { Link } from 'react-router-dom';\n"
        # change <a> to <Link> for React 
        jsx = re.sub(r'<a href="\./blog-([^.]*)\.html">', r'<Link to="/blog/\1">', jsx)
        jsx = jsx.replace('</a>', '</Link>')
        
    
    out = f"""{imports}
export default function {name}() {{
  return (
    <>
{jsx}
    </>
  );
}}
"""
    with open(meta["path"], "w") as out_f:
        out_f.write(out)

print("Extraction completed!")
