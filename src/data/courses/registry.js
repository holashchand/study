import javaMeta from './java-fundamentals/meta.js'
import designPatternsMeta from './design-patterns/meta.js'

const courses = [javaMeta, designPatternsMeta]

export default courses
export { courses }

export function getCourse(slug) {
  return courses.find(c => c.slug === slug) ?? null
}
