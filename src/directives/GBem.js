var defaultRootName = 'ez-root'
var rootAttributeName = 'data-ez-root'
var idAttributeName = 'data-bem-id'
var elementPrefix = '__'
var statusPrefix = '--'
var statusSeparator = '|'
var classSeparator = ' '
var stringConcator = ''

export default function install(Vue) {
  Vue.directive('bem', {
    bind(el, binding, vnode) {
      var myType = document.createAttribute(idAttributeName)

      myType.value = binding.arg || el.localName

      el.attributes.setNamedItem(myType)

      if (binding.modifiers && binding.modifiers.root) {
        el.attributes.setNamedItem(document.createAttribute(rootAttributeName))
      }

      Vue.nextTick(() => {
        updateClassName(el, binding, vnode)
      })
    },
    update(el, binding, vnode) {
      updateClassName(el, binding, vnode)
    }
  })
}

function updateClassName(el, binding, vnode) {
  var paths = getElementPaths(vnode.elm),
    statuses = (binding.value && binding.value.split(statusSeparator)) || [],
    appendedClassName = getBEMClassName(paths, statuses),
    otherClassName = (el.className.split(classSeparator) || [])
      .filter(cl => cl.indexOf(defaultRootName) < 0)
      .join(classSeparator)

  el.className = [appendedClassName, classSeparator, otherClassName]
    .join(stringConcator)
    .trim()
}

function getElementPaths(elm, paths = []) {
  var myType = elm && elm.attributes.getNamedItem(idAttributeName)

  if (!myType || !myType.value) {
    paths.unshift(defaultRootName)
    return paths
  }

  if (elm.attributes.getNamedItem(rootAttributeName)) {
    paths.unshift([defaultRootName, myType.value].join(elementPrefix))
    return paths
  }

  paths.unshift(myType.value)

  return getElementPaths(elm.parentElement, paths)
}

function getBEMClassName(paths = [], statuses = []) {
  var base = paths.join(elementPrefix),
    classes = [base]

  classes = classes.concat(
    statuses.map(status => [base, status].join(statusPrefix))
  )

  return classes.join(classSeparator)
}
