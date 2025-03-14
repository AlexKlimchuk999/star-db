
const compose = (...funcs) => (copm) => {
  return funcs.reduceRight(
    (prevResult, f) => f(prevResult), copm )
}

export default compose;