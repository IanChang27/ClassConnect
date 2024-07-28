// Purpose: This file is used to search for articles a based on the users input

let jsonData = `[
    {"Name": "Climate Change Research Article", "link": "https://www.nature.com/articles/s41558-020-00968-3"},
    {"Name": "Climate Change Mini Lesson", "link": "https://www.khanacademy.org/science/hs-biology/x4c673362230887ef:molecular-genetics/x4c673362230887ef:introduction-to-climate-change/a/hs-introduction-to-climate-change"},
    {"Name": "Molecular Biology Research Article", "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7144780/"},
    {"Name": "Molecular Biology Mini Lesson", "link": "https://www.khanacademy.org/science/biology"},
    {"Name": "Astronomy Research Article", "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2779162/"},
    {"Name": "Astronomy Mini Lesson", "link": "https://www.visiblebody.com/anatomy-and-physiology"},
    {"Name": "Chemistry Research Article", "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3612745/"},
    {"Name": "Chemistry Mini Lesson", "link": "https://www.khanacademy.org/science/biology/genetics"},
    {"Name": "Zoology Research Article", "link": "https://journals.aps.org/prl/"},
    {"Name": "Zoology Mini Lesson", "link": "https://www.khanacademy.org/science/physics"}
  ]`
  
  let sources = JSON.parse(jsonData)

  function search_sources() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""
  
    for (i = 0; i < sources.length; i++) {
      let obj = sources[i];
  
      if (obj.Name.toLowerCase().startsWith(input)) {
        const elem = document.createElement("li")
        elem.innerHTML = `${obj.Name} - ${obj.link}`
        x.appendChild(elem)
      }
    }
  }