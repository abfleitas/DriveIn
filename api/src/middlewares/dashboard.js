
const dashboard = (props) => {
    let query = props

    let order = null;
    let corte = null;
    let pagina = null;
    if (query.filter) {
      let sort = query.sort
      order = JSON.parse("[" + sort + "]");
      let page = JSON.parse("[" + query.range + "]");
      pagina = page[0][0]
      corte = page[0][1] + 1 - pagina
      console.log(order)
    } else {
      order = null;
      corte = null;
      pagina = null;
    }
return {
    order,
    corte,
    pagina
}

}

module.exports = {
    dashboard,
}