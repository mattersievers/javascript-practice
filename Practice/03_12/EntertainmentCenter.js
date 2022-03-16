class EntertainmentCenter {
    constructor(
        color,
        height,
        width,
        rightTopShelveHeight,
        rightBottomShelveHeight,
        leftTopShelveHeight,
        leftBottomShelveHeight,
        leftDrawerOpen,
        rightDrawerOpen,
        gameConsoles
    ) {
    this.color = color;
    this.height = height;
    this.width = width;
    this.rightShelve = {
        topShelveHeight: rightTopShelveHeight,
        bottomShelveHeight: rightBottomShelveHeight
    };
    this.leftShelve = {
        topShelveHeight: leftTopShelveHeight,
        bottomShelveHeight: leftBottomShelveHeight
    };
    this.leftDrawerOpen = leftDrawerOpen;
    this.rightDrawerOpen = rightDrawerOpen;
    this.gameConsoles = gameConsoles;
}
    swingRightDrawer(){
        this.rightDrawerOpen = !this.rightDrawerOpen;
    }
    swingLeftDrawer(){
        this.leftDrawerOpen = !this.leftDrawerOpen;
    }

}

export default EntertainmentCenter;