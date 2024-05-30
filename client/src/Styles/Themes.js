class Font {
    constructor (regular,link) {
        this.regular = regular
        this.link = link
    }
}
class Theme {
    constructor(primary,secondary,tertiary,background,transparent,font) {
        this.primary = primary
        this.secondary = secondary
        this.tertiary = tertiary
        this.background = background
        this.transparent = transparent
        this.font = font
    }
}

export const lightTheme = new Theme (
    "#fafafa",
    "#e4e5f1",
    "#d2d3db",
    "#484b6a",
    "(0,0,0,0.05)",
    new Font("#111111","#9E9EFF")
)

export const darkTheme = new Theme (
    "#3e3e42",
    "#2d2d30",
    "#252526",
    "#1e1e1e",
    "(255,255,255,0.05)",
    new Font("#eeeeee","#FF9E9E")
)