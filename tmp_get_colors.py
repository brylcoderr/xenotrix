from PIL import Image
import collections
import os

def get_top_colors(image_path):
    if not os.path.exists(image_path):
        return "File not found"
    img = Image.open(image_path)
    img = img.convert('RGB')
    pixels = list(img.getdata())
    counts = collections.Counter(pixels)
    most_common = counts.most_common(10)
    results = []
    for color, count in most_common:
        r, g, b = color
        hex_c = '#{:02x}{:02x}{:02x}'.format(r, g, b)
        results.append(f"{hex_c}: {count}")
    return "\n".join(results)

print(get_top_colors('d:/Work/xenotrix/public/images/logo.png'))
