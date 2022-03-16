/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const entertainmentCenter = {
    tv: {
        sizeIn: 32,
        Brand: "DYNEX"
    },
    leftShelf: {
        topShelfPegHeight: 26,
        bottomShelfPegHeight: 13
    },
    rightShelf: {
        topShelfPegHeight: 26,
        bottomShelfPegHeight: 13
    },
    leftDrawerOpen: false,
    rightDrawerOpen: false,
    nintendoGames: ["Mario 64","Donkey Kong 64","Pilot Wings 64"],
    nintendo64:{
        isOn: false,
        controller1connected: false,
        controller2connected: false,
        controller3connected: false,
        controller4connected: false,
        currentGame: "None"
    },
    gameCube: {
        isOn: false,
        isOpen:false,
        controller1connected: true,
        controller2connected: false,
        controller3connected: false,
        controller4connected: false,
        currentGame: "Luigi's Mansion"
    },

    openRightDrawer: function(isOpen){
        this.rightDrawerOpen = isOpen;
    },
    openLeftDrawer: function(isOpen){
        this.leftDrawerOpen = isOpen;
    },

    gameCubePowerButton: function() {
        this.gameCube.isOn = !this.gameCube.isOn;
    },
    gameCubeOpenButton: function() {
        this.gameCube.isOpen = !this.gameCube.isOpen;
    },
    nintendo64PowerButton: function() {
        this.nintendo64.isOn = !this.nintendo64.isOn;
    }

}