const Routes = () => {

    const suffix = process.env.NODE_ENV === "development" ? "" : ".html"
    const data = {
        index: `index${suffix}`,
        sub: `sub${suffix}`
    }
    return data
}

export default Routes