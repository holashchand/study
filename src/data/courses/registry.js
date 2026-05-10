import javaMeta from './java-fundamentals/meta.js'

const courses = [javaMeta]

export default courses

export function getCourse(slug) {
  return courses.find(c => c.slug === slug) ?? null
}
