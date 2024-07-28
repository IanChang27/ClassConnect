// Purpose: This file is used to search for articles a based on the users input

let sourceslist = [
  { "Name": "Climate Change Research Article", "link": "https://www.nature.com/articles/s41558-020-00968-3" },
  { "Name": "Climate Change Mini Lesson", "link": "https://www.khanacademy.org/science/hs-biology/x4c673362230887ef:molecular-genetics/x4c673362230887ef:introduction-to-climate-change/a/hs-introduction-to-climate-change" },
  { "Name": "Molecular Biology Research Article", "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7144780/" },
  { "Name": "Molecular Biology Mini Lesson", "link": "https://www.khanacademy.org/science/biology" },
  { "Name": "Anatomy Research Article", "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2779162/" },
  { "Name": "Anatomy Mini Lesson", "link": "https://www.visiblebody.com/anatomy-and-physiology" },
  { "Name": "Chemistry Research Article", "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3612745/" },
  { "Name": "Chemistry Mini Lesson", "link": "https://www.khanacademy.org/science/biology/genetics" },
  { "Name": "Zoology Research Article", "link": "https://journals.aps.org/prl/" },
  { "Name": "Zoology Mini Lessons", "link": "https://www.khanacademy.org/science/physics"},
  { "Name": "Zoology Mini Lessons; Additional Lesson", "link":  "https://www.edzoocating.com/science-resources/mini-science-lessons" },
  {"Name": "Zoology Research Article; Additional Article", "link": "https://www.edzoocating.com/science-resources/mini-science-lessons"},
  {"Name": "Chemistry Mini Lesson; Additional Lessons", "link": "https://www.acs.org/middleschoolchemistry/lessonplans.html" },
  {"Name": "Chemistry Research Article; Additional Article", "link": "https://onlinelibrary.wiley.com/journal/7072?utm_source=google&utm_medium=paidsearch&utm_campaign=544738&utm_content=Chemistry-IANC&gad_source=1&gclid=CjwKCAjw2Je1BhAgEiwAp3KY79qzNQ7xy4Vp5uRN2rFjpO57gQBW9trc2tjiEvrIwC2UCh8jNaKnDxoCenAQAvD_BwE"},
  {"Name": "Anatomy Mini Lesson; Additional Lessons", "link": "https://www.teacherspayteachers.com/browse/free?search=anatomy%20lesson%20plans" },
  {"Name": "Anatomy Research Article; Additional Articles", "link": "https://www.nature.com/subjects/anatomy"},
  {"Name": "Molecular Biology Mini Lesson; Additional Lessons", "link": "https://thinkib.net/biology/page/16979/molecular-biology-activities-for-learning" },
  {"Name": "Molecular Biology Research Article; Additional Articles", "link": "https://www.nature.com/srep/calls-for-papers?subject=Biology&gad_source=1&gclid=CjwKCAjw2Je1BhAgEiwAp3KY7w8hpmaCGXY6y_uYrLGUYX6G_d6MH74pXPXzTZRf-1YFJrBnKM8vcBoCOVEQAvD_BwE"},
  {"Name": "Climate Change Mini Lesson; Additional Lessons", "link": "https://www.nytimes.com/2021/11/04/learning/lesson-plans/resources-for-teaching-about-climate-change-with-the-new-york-times.html" },
  {"Name": "Climate Change Research Article; Additional Article", "link": "https://www.economist.com/asia/2024/07/18/climate-change-is-making-the-monsoon-more-dangerous" }

]

function search_sources() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.querySelector('#list-holder');
  x.innerHTML = ""

  for (i = 0; i < sourceslist.length; i++) {
    let obj = sourceslist[i];

    if (obj.Name.toLowerCase().includes(input)) {
      const elem = document.createElement("li")
      elem.innerHTML = `${obj.Name} - ${obj.link}`
      x.appendChild(elem)
    }
  }
}