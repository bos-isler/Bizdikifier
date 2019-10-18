var elements = document.getElementsByTagName('*')

for (let i = 0; i < elements.length; i++) {
  let el = elements[i]
  for (let j = 0; j < el.childNodes.length; j++) {
    let child = el.childNodes[j]
    if (child.nodeType !== 3) continue
    let text = child.nodeValue.replace(/Fork/gi, 'Bızdık')
    el.replaceChild(document.createTextNode(text), child)
  }
}
