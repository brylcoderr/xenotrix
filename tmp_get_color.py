from PIL import Image
import collections
import os

def get_dominant_color(image_path):
    if not os.path.exists(image_path):
        return "File not found"
    img = Image.open(image_path)
    img = img.convert('RGB')
    pixels = list(img.getdata())
    counts = collections.Counter(pixels)
    most_common = counts.most_common(50)
    for color, count in most_common:
        r, g, b = color
        # Skip shades of gray/white/black (high brightness or low saturation)
        if abs(r-g) < 25 and abs(g-b) < 25 and abs(r-b) < 25:
            continue
        return '#{:02x}{:02x}{:02x}'.format(r, g, b)
    return '#8b5cf6'

print(get_dominant_color('d:/Work/xenotrix/public/images/logo.png'))
