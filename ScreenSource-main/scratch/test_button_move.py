import glob
import re

files = glob.glob('*-pune.html')
print(f"Total location files: {len(files)}")

btn_pattern = re.compile(
    r'(<!--\s*Action Buttons.*?-->\s*)?<div[^>]*style="[^"]*display:\s*flex[^"]*"[^>]*>\s*<a[^>]*class="btn-quote-pill"[^>]*>.*?</a>\s*<a[^>]*class="btn-whatsapp-pill"[^>]*>.*?</a>\s*</div>',
    re.DOTALL
)

col4_pattern = re.compile(
    r'(<div class="col-lg-4 text-center my-3 my-lg-0">\s*<img[^>]*>)\s*(</div>)',
    re.DOTALL
)

success_count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    btn_match = btn_pattern.search(c)
    col4_match = col4_pattern.search(c)
    
    print(f"{f}: btn_match={'YES' if btn_match else 'NO'}, col4_match={'YES' if col4_match else 'NO'}")
    if btn_match and col4_match:
        success_count += 1

print(f"Matched both in {success_count}/{len(files)} files.")
