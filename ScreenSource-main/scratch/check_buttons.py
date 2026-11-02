import glob
import re

files = glob.glob('*-pune.html')
print(f"Total *-pune.html files: {len(files)}")

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    has_btn_pill = 'btn-quote-pill' in c
    has_col_4 = 'col-lg-4' in c
    has_showcase_img = bool(re.search(r'<div class="col-lg-4[^>]*>.*?<img[^>]*>', c, re.DOTALL))
    print(f"{f}: has_btn_pill={has_btn_pill}, has_col_4={has_col_4}, has_img={has_showcase_img}")
