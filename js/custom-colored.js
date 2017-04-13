var config_tree = {
        container: "#custom-colored",
        nodeAlign: "BOTTOM",
        connechild1rs: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    mainParent = {
        HTMLclass: 'green-bottom50',
        text: {
            name: "Amit Mishra",
            title: "Started Writing Blog"
        },
        image: "./images/I043155.jpg"
    },
    child1 = {
        parent: mainParent,
        HTMLclass: 'green',
        text:{
            name: "Rohit Negi",
            title: "Started Writing Blog"
        },
        image: "./images/I064952.jpg"
    },
    child2 = {
        parent: mainParent,
        HTMLclass: 'green-bottom50',
        text:{
            name: "Shashank, Kulshrestha",
            title: "Started Writing Blog"
        },
        image: "./images/I331657.jpg"
    },
    child11 = {
        HTMLclass: 'green-bottom50',
        parent: child1,
        text:{
            name: "Jayendra kartheek, Garnimetta",
            title: "Started Writing Blog"
        },
        image: "./images/I329692.jpg"
    },
    child12 = {
        parent: child1,
        text:{
            name: "Sudhanshu, Yadav",
            title: "Started Writing Blog"
        },
        image: "./images/I330822.jpg"
    },
    child21 = {
        HTMLclass: 'green',
        parent: child2,
        text:{
            name: "Anurag",
            title: "Started Writing Blog"
        },
        image: "./images/I311168.jpg"
    },
    child22 = {
        parent: child2,
        text:{
            name: "Achint Kumar, Rathor",
            title: "Started Writing Blog"
        },
        image: "./images/I331047.jpg"
    },
    child111 = {
        parent: child11,
        text:{
            name: "Sreejith, Mohan Menon",
            title: "Started Writing Blog"
        },
        image: "./images/I043373.jpg"
    },
    child112 = {
        HTMLclass: 'green',
        parent: child11,
        text:{
            name: "Thejes, A.G",
            title: "Started Writing Blog"
        },
        image: "./images/I060438.jpg"
    },
    child211 = {
        HTMLclass: 'green-bottom50',
        parent: child21,
        text:{
            name: "Sameer, Menon",
            title: "Started Writing Blog"
        },
        image: "./images/I331652.jpg"
    },
    child212 = {
        parent: child21,
        text:{
            name: "Kriti, Srivastava",
            title: "Started Writing Blog"
        },
        image: "./images/I331382.jpg"
    },
    child221 = {
        parent: child22,
        text:{
            name: "Vipin, Shivashankaran",
            title: "Started Writing Blog"
        },
        image: "./images/I030005.jpg"
    },
    child222 = {
        parent: child22,
        text:{
            name: "Kavya, Jampani",
            title: "Started Writing Blog"
        },
        image: "./images/I331402.jpg"
    },

    child2111 = {
        HTMLclass: 'green',
        parent: child211,
        text:{
            name: "Pramod, Indiresh",
            title: "Started Writing Blog"
        },
        image: "./images/I053023.jpg"
    },

    child2112 = {
        parent: child211,
        text:{
            name: "Priya, Powar",
            title: "Started Writing Blog"
        },
        image: "./images/I331407.jpg"
    },
    child21111 = {
        parent: child2111,
        text:{
            name: "Abhiram, Ravikumar",
            title: "Started Writing Blog"
        },
        image: "./images/I333032.jpg"
    },
    child21112 = {
        parent: child2111,
        text:{
            name: "Gouri, Shah",
            title: "Started Writing Blog"
        },
        image: "./images/I331129.jpg"
    },

    child211111 = {
        parent: child21111,
        text:{
            name: "Debasish, Panda",
            title: "Started Writing Blog"
        },
        image: "./images/I034834.jpg"
    },
    child211112 = {
        parent: child21111,
        text:{
            name: "Mahesh, Gopalan",
            title: "Started Writing Blog"
        },
        image: "./images/I014260.jpg"
    },
    child2111121 = {
        parent: child211112,
        text:{
            name: "Samyak, Jain",
            title: "Started Writing Blog"
        },
        image: "./images/I331420.jpg"
    },
    child2111122 = {
        parent: child211112,
        text:{
            name: "Gagan, K",
            title: "Started Writing Blog"
        },
        image: "./images/I331412.jpg"
    },
    child2221 = {
        parent: child222,
        text:{
            name: "Sourabh, Kulkarni",
            title: "Started Writing Blog"
        },
        image: "./images/I331582.jpg"
    },
    child2222 = {
        parent: child222,
        text:{
            name: "Vinayak Nath, Singh",
            title: "Started Writing Blog"
        },
        image: "./images/I066990.jpg"
    },
    child21121 = {
        parent: child2112,
        text:{
            name: "Kulkarni, Shruti",
            title: "Started Writing Blog"
        },
        image: "./images/I331337.jpg"
    },
    child21122 = {
        parent: child2112,
        text:{
            name: "Agarwal, Vaibhav",
            title: "Started Writing Blog"
        },
        image: "./images/I065600.jpg"
    },
    child211211 = {
        parent: child21121,
        text:{
            name: "Shalini, Jha",
            title: "Started Writing Blog"
        },
        image: "./images/I069231.jpg"
    },
    child211212 = {
        parent: child21121,
        text:{
            name: "Shweta, Johari",
            title: "Started Writing Blog"
        },
        image: "./images/I332758.jpg"
    },
    child2121 = {
        parent: child212,
        text:{
            name: "Jemma, Vince",
            title: "Started Writing Blog"
        },
        image: "./images/I332721.jpg"
    },
    child2122 = {
        parent: child212,
        text:{
            name: "Rishabh, Gour",
            title: "Started Writing Blog"
        },
        image: "./images/I330796.jpg"
    },
    child21221 = {
        parent: child2122,
        text:{
            name: "Amitha, Srinivasan",
            title: "Started Writing Blog"
        },
        image: "./images/I304332.jpg"
    },
    child212211 = {
        parent: child21221,
        text:{
            name: "Bhuvana, Raju",
            title: "Started Writing Blog"
        },
        image: "./images/I331594.jpg"
    },
    child212212 = {
        parent: child21221,
        text:{
            name: "Alik, Garai",
            title: "Started Writing Blog"
        },
        image: "./images/I332308.jpg"
    },
    child2122121 = {
        parent: child212212,
        text:{
            name: "Shivakumar",
            title: "Started Writing Blog"
        },
        image: "./images/I329330.jpg"
    },
    child2122122 = {
        parent: child212212,
        text:{
            name: "Vishwarajsinh, Sodha",
            title: "Started Writing Blog"
        },
        image: "./images/I332723.jpg"
    },
    child21222 = {
        parent: child2122,
        text:{
            name: "Shivani, Kandavelu",
            title: "Started Writing Blog"
        },
        image: "./images/I330821.jpg"
    },
    child212221 = {
        parent: child21222,
        text:{
            name: "Shiv Shankar, S.S.V",
            title: "Started Writing Blog"
        },
        image: "./images/I330820.jpg"
    },
    child2122211 = {
        parent: child212221,
        text:{
            name: "Keerthi Abinesh, Ravikumar",
            title: "Started Writing Blog"
        },
        image: "./images/I332211.jpg"
    },
    child2122212 = {
        parent: child21222,
        text:{
            name: "Karan, Khanchandani",
            title: "Started Writing Blog"
        },
        image: "./images/I331399.jpg"
    },
    child212222 = {
        parent: child212221,
        text:{
            name: "Narendran, N.V",
            title: "Started Writing Blog"
        },
        image: "./images/I331181.jpg"
    },
    child2122221 = {
        parent: child212222,
        text:{
            name: "Priyanka H, Mallesh",
            title: "Started Writing Blog"
        },
        image: "./images/I336217.jpg"
    },
    child2122222 = {
        parent: child212222,
        text:{
            name: "Saranya, Nagabhushan",
            title: "Started Writing Blog"
        },
        image: "./images/C5158471.jpg"
    },
    child21211 = {
        parent: child2121,
        text:{
            name: "Vigneshwari, Sambandan",
            title: "Started Writing Blog"
        },
        image: "./images/I332724.jpg"
    },
    child21212 = {
        parent: child2121,
        text:{
            name: "Anagha, Ravinarayan",
            title: "Started Writing Blog"
        },
        image: "./images/I331394.jpg"
    },
    child212121 = {
        parent: child21212,
        text:{
            name: "Sindhu, Kishore",
            title: "Started Writing Blog"
        },
        image: "./images/I331403.jpg"
    },
    child212122 = {
        HTMLclass: 'green-bottom50',
        parent: child21212,
        text:{
            name: "Sindhu, Janardhana",
            title: "Started Writing Blog"
        },
        image: "./images/I071993.jpg"
    },
    child2121221 = {
        HTMLclass: 'green',
        parent: child212122,
        text:{
            name: "Mangkhankhual, Hangshing",
            title: "Started Writing Blog"
        },
        image: "./images/I329854.jpg"
    },
    child21212211 = {
        parent: child2121221,
        text:{
            name: "Aashka, Shah",
            title: "Started Writing Blog"
        },
        image: "./images/I324332.jpg"
    },
    child2121222 = {
        parent: child212122,
        text:{
            name: "Preethi, Ramamourthy",
            title: "Started Writing Blog"
        },
        image: "./images/I331397.jpg"
    },
    child21212221 = {
        parent: child2121222,
        text:{
            name: "Vighneswaran, CE",
            title: "Started Writing Blog"
        },
        image: "./images/I049143.jpg"
    },
    child21212222 = {
        parent: child2121222,
        text:{
            name: "Madhu, GC",
            title: "Started Writing Blog"
        },
        image: "./images/I049670.jpg"
    },
    child2121211 = {
        parent: child212121,
        text:{
            name: "Sowmya, BG",
            title: "Started Writing Blog"
        },
        image: "./images/I311155.jpg"
    },
    child21212111 = {
        parent: child2121211,
        text:{
            name: "Abhishek, P.G.",
            title: "Started Writing Blog"
        },
        image: "./images/I311001.jpg"
    },
    child21212112 = {
        parent: child2121211,
        text:{
            name: "Nikhil, Hirve",
            title: "Started Writing Blog"
        },
        image: "./images/I331388.jpg"
    },
    child2121212 = {
        parent: child212121,
        text:{
            name: "Rimi, DE",
            title: "Started Writing Blog"
        },
        image: "./images/I311155.jpg"
    },
    child21212121 = {
        parent: child2121212,
        text:{
            name: "Pavan, Chittanpalli Vasudevan",
            title: "Started Writing Blog"
        },
        image: "./images/I032875.jpg"
    },
    child212121211 = {
        parent: child21212121,
        text:{
            name: "Karthik, M.K.",
            title: "Started Writing Blog"
        },
        image: "./images/I032429.jpg"
    },
    child212121212 = {
        parent: child21212121,
        text:{
            name: "Shwetha Monappa, Nairy",
            title: "Started Writing Blog"
        },
        image: "./images/I062039.jpg"
    },
    child21212122 = {
        parent: child2121212,
        text:{
            name: "Kanhu, Ranjan Padhi",
            title: "Started Writing Blog"
        },
        image: "./images/I052877.jpg"
    },
    chart_tree_config = [
        config_tree,
        mainParent,child1,child2,
        child11,child12,
        child21,child22,
        child111,child112,
        child211,child212,
        child221,child222,
        child2111,child2112,
        child21111,child21112,
        child211111,child211112,
        child2111121,child2111122,
        child2221,child2222,
        child21121,child21122,
        child211211,child211212,
        child2121,child2122,
        child21211,child21212,
        child212121,child212122,
        child2121221,child2121222,
        child21212211,
        child21212221,child21212222,
        child2121211,child2121212,
        child212121211,child212121212,
        child21212111,child21212112,
        child21212121,child21212122,
        child21221,child21222,
        child212211,child212212,
        child2122121,child2122122,
        child212221,child212222,
        child2122211,child2122212,
        child2122222,child2122221

    ];
/*collapsable view not updated*/
var config_collapse = {
        container: "#collapsable-data",
        animateOnInit: !0,
        node: {
            collapsable: !0
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    mainParent = {
        HTMLclass: 'green-bottom50',
        text: {
            title: "Amit Mishra"
        },
        image: "./images/I043155.jpg"
    },

    child1 = {
        parent: mainParent,
        HTMLclass: 'green',
        text:{
            title: "Rohit Negi",
        },
        image: "./images/I064952.jpg"
    },
    child2 = {
        parent: mainParent,
        HTMLclass: 'green-bottom50',
        text:{
            title: "Shashank, Kulshrestha"
        },
        image: "./images/I331657.jpg"
    },
    child11 = {
        HTMLclass: 'green-bottom50',
        parent: child1,
        text:{
            title: "Jayendra kartheek, Garnimetta"
        },
        image: "./images/I329692.jpg"
    },
    child12 = {
        parent: child1,
        text:{
            title: "Sudhanshu, Yadav"
        },
        image: "./images/I330822.jpg"
    },
    child21 = {
        parent: child2,
        text:{
            title: "Anurag"
        },
        image: "./images/I311168.jpg"
    },
    child22 = {
        parent: child2,
        text:{
            title: "Achint Kumar, Rathor"
        },
        image: "./images/I331047.jpg"
    },
    child111 = {
        parent: child11,
        text:{
            title: "Sreejith, Mohan Menon"
        },
        image: "./images/I043373.jpg"
    },
    child112 = {
        parent: child11,
        text:{
            title: "Thejes, A.G"
        },
        image: "./images/I060438.jpg"
    },
    child211 = {
        HTMLclass: 'green-bottom50',
        parent: child21,
        text:{
            title: "Sameer, Menon"
        },
        image: "./images/I331652.jpg"
    },
    child212 = {
        parent: child21,
        text:{
            title: "Kriti, Srivastava"
        },
        image: "./images/I331382.jpg"
    },
    child221 = {
        parent: child22,
        text:{
            title: "Vipin, Shivashankaran"
        },
        image: "./images/I030005.jpg"
    },
    child222 = {
        parent: child22,
        text:{
            title: "Kavya, Jampani"
        },
        image: "./images/I331402.jpg"
    },

    child2111 = {
        HTMLclass: 'green',
        parent: child211,
        text:{
            title: "Pramod, Indiresh"
        },
        image: "./images/I053023.jpg"
    },

    child2112 = {
        parent: child211,
        text:{
            title: "Priya, Powar"
        },
        image: "./images/I331407.jpg"
    },
    child21111 = {
        parent: child2111,
        text:{
            title: "Abhiram, Ravikumar"
        },
        image: "./images/I333032.jpg"
    },
    child21112 = {
        parent: child2111,
        text:{
            title: "Gouri, Shah"
        },
        image: "./images/I331129.jpg"
    },

    child211111 = {
        HTMLclass: 'green',
        parent: child21111,
        text:{
            title: "Debasish, Panda"
        },
        image: "./images/I034834.jpg"
    },
    child211112 = {
        parent: child21111,
        text:{
            title: "Mahesh, Gopalan"
        },
        image: "./images/I014260.jpg"
    },
    child2111121 = {
        parent: child211112,
        text:{
            title: "Samyak, Jain"
        },
        image: "./images/I331420.jpg"
    },
    child2111122 = {
        parent: child211112,
        text:{
            title: "Gagan, K"
        },
        image: "./images/I331412.jpg"
    },
    child2221 = {
        parent: child222,
        text:{
            title: "Sourabh, Kulkarni"
        },
        image: "./images/I331582.jpg"
    },
    child2222 = {
        parent: child222,
        text:{
            title: "Vinayak Nath, Singh"
        },
        image: "./images/I066990.jpg"
    },
    child21121 = {
        parent: child2112,
        text:{
            title: "Kulkarni, Shruti"
        },
        image: "./images/I331337.jpg"
    },
    child21122 = {
        parent: child2112,
        text:{
            title: "Agarwal, Vaibhav"
        },
        image: "./images/I065600.jpg"
    },
    child211211 = {
        parent: child21121,
        text:{
            title: "Shalini, Jha"
        },
        image: "./images/I069231.jpg"
    },
    child211212 = {
        parent: child21121,
        text:{
            title: "Shweta, Johari"
        },
        image: "./images/I332758.jpg"
    },
    child2121 = {
        parent: child212,
        text:{
            title: "Jemma, Vince"
        },
        image: "./images/I332721.jpg"
    },
    child2122 = {
        parent: child212,
        text:{
            title: "Rishabh, Gour"
        },
        image: "./images/I330796.jpg"
    },
    child21221 = {
        parent: child2122,
        text:{
            title: "Amitha, Srinivasan"
        },
        image: "./images/I304332.jpg"
    },
    child212211 = {
        parent: child21221,
        text:{
            title: "Bhuvana, Raju"
        },
        image: "./images/I331594.jpg"
    },
    child212212 = {
        parent: child21221,
        text:{
            title: "Alik, Garai"
        },
        image: "./images/I332308.jpg"
    },
    child2122121 = {
        parent: child212212,
        text:{
            title: "Shivakumar"
        },
        image: "./images/I329330.jpg"
    },
    child2122122 = {
        parent: child212212,
        text:{
            title: "Vishwarajsinh, Sodha"
        },
        image: "./images/I332723.jpg"
    },
    child21222 = {
        parent: child2122,
        text:{
            title: "Shivani, Kandavelu",
        },
        image: "./images/I330821.jpg"
    },
    child212221 = {
        parent: child21222,
        text:{
            title: "Shiv Shankar, S.S.V",
        },
        image: "./images/I330820.jpg"
    },
    child2122211 = {
        parent: child212221,
        text:{
            title: "Keerthi Abinesh, Ravikumar",
        },
        image: "./images/I332211.jpg"
    },
    child2122212 = {
        parent: child21222,
        text:{
            title: "Karan, Khanchandani",
        },
        image: "./images/I331399.jpg"
    },
    child212222 = {
        parent: child212221,
        text:{
            title: "Narendran, N.V",
        },
        image: "./images/I331181.jpg"
    },
    child2122221 = {
        parent: child212222,
        text:{
            title: "Priyanka H, Mallesh",
        },
        image: "./images/I336217.jpg"
    },
    child2122222 = {
        parent: child212222,
        text:{
            title: "Saranya, Nagabhushan",
        },
        image: "./images/C5158471.jpg"
    },
    child21211 = {
        parent: child2121,
        text:{
            title: "Vigneshwari, Sambandan"
        },
        image: "./images/I332724.jpg"
    },
    child21212 = {
        parent: child2121,
        text:{
            title: "Anagha, Ravinarayan"
        },
        image: "./images/I331394.jpg"
    },
    child212121 = {

        parent: child21212,
        text:{
            title: "Sindhu, Kishore"
        },
        image: "./images/I331403.jpg"
    },
    child212122 = {
        HTMLclass: 'green-bottom50',
        parent: child21212,
        text:{
            title: "Sindhu, Janardhana"
        },
        image: "./images/I071993.jpg"
    },
    child2121221 = {
        parent: child212122,
        text:{
            title: "Mangkhankhual, Hangshing"
        },
        image: "./images/I329854.jpg"
    },
    child21212211 = {
        parent: child2121221,
        text:{
            title: "Aashka, Shah"
        },
        image: "./images/I324332.jpg"
    },
    child2121222 = {
        parent: child212122,
        text:{
            title: "Preethi, Ramamourthy"
        },
        image: "./images/I331397.jpg"
    },
    child21212221 = {
        parent: child2121222,
        text:{
            title: "Vighneswaran, CE"
        },
        image: "./images/I049143.jpg"
    },
    child21212222 = {
        parent: child2121222,
        text:{
            title: "Madhu, GC"
        },
        image: "./images/I049670.jpg"
    },
    child2121211 = {
        parent: child212121,
        text:{
            title: "Sowmya, BG"
        },
        image: "./images/I311155.jpg"
    },
    child21212111 = {
        parent: child2121211,
        text:{
            title: "Abhishek, P.G."
        },
        image: "./images/I311001.jpg"
    },
    child21212112 = {
        parent: child2121211,
        text:{
            title: "Nikhil, Hirve"
        },
        image: "./images/I331388.jpg"
    },
    child2121212 = {
        parent: child212121,
        text:{
            title: "Rimi, DE"
        },
        image: "./images/I311155.jpg"
    },
    child21212121 = {
        parent: child2121212,
        text:{
            title: "Pavan, Chittanpalli Vasudevan"
        },
        image: "./images/I032875.jpg"
    },
    child212121211 = {
        parent: child21212121,
        text:{
            title: "Karthik, M.K."
        },
        image: "./images/I032429.jpg"
    },
    child212121212 = {
        parent: child21212121,
        text:{
            title: "Shwetha Monappa, Nairy"
        },
        image: "./images/I062039.jpg"
    },
    child21212122 = {
        parent: child2121212,
        text:{
            title: "Kanhu, Ranjan Padhi"
        },
        image: "./images/I052877.jpg"
    },
    chart_collapse_config = [config_collapse, mainParent, child1, child2,
        child11, child12,
        child21, child22,
        child111, child112,
        child211, child212,
        child221, child222,
        child2111, child2112,
        child21111, child21112,
        child211111, child211112,
        child2111121, child2111122,
        child2221, child2222,
        child21121, child21122,
        child211211, child211212,
        child2121, child2122,
        child21211, child21212,
        child212121, child212122,
        child2121221, child2121222,
        child21212211,
        child21212221, child21212222,
        child2121211, child2121212,
        child212121211, child212121212,
        child21212111, child21212112,
        child21212121, child21212122,
        child21221, child21222,
        child212211, child212212,
        child2122121, child2122122,
        child212221, child212222,
        child2122211, child2122212,
        child2122222, child2122221
    ];
/*connector not updated */    
var config_connector={container:"#connector-data",levelSeparation:45,rootOrientation:"WEST",nodeAlign:"BOTTOM",connectors:{type:"step",style:{"stroke-width":2}},node:{HTMLclass:"big-commpany"}},mainParent={HTMLclass:"green-bottom50.jpg",text:{name:"Amit Mishra",title:"Started Writing Blog"}},child1={parent:mainParent,pseudo:!0,connectors:{style:{stroke:"#00CE67.jpg"}},text:{name:"Rohit Negi",title:"Started Writing Blog"}},child2={parent:mainParent,pseudo:!0,connectors:{style:{stroke:"#00CE67.jpg"}},text:{name:"Shashank, Kulshrestha",title:"Started Writing Blog"}},child11={parent:child1,text:{name:"Jayendra kartheek, Garnimetta",title:"Started Writing Blog"}},child12={parent:child1,text:{name:"Sudhanshu, Yadav",title:"Started Writing Blog"}},child21={parent:child2,text:{name:"Anurag",title:"Started Writing Blog"}},child22={parent:child2,text:{name:"Achint Kumar, Rathor",title:"Started Writing Blog"}},child111={parent:child11,text:{name:"Sreejith, Mohan Menon",title:"Started Writing Blog"}},child112={parent:child11,text:{name:"Thejes, A.G",title:"Started Writing Blog"}},child211={parent:child21,text:{name:"Sameer, Menon",title:"Started Writing Blog"}},child212={parent:child21,text:{name:"Kriti, Srivastava",title:"Started Writing Blog"}},child221={parent:child22,text:{name:"Vipin, Shivashankaran",title:"Started Writing Blog"}},child222={parent:child22,text:{name:"Kavya, Jampani",title:"Started Writing Blog"}},child2111={parent:child211,text:{name:"Pramod, Indiresh",title:"Started Writing Blog"}},child2112={parent:child211,text:{name:"Priya, Powar",title:"Started Writing Blog"}},child21111={parent:child2111,text:{name:"Abhiram, Ravikumar",title:"Started Writing Blog"}},child21112={parent:child2111,text:{name:"Gouri, Shah",title:"Started Writing Blog"}},child211111={parent:child21111,text:{name:"Debasish, Panda",title:"Started Writing Blog"}},child211112={parent:child21111,text:{name:"Mahesh, Gopalan",title:"Started Writing Blog"}},child2111121={parent:child211112,text:{name:"Samyak, Jain",title:"Started Writing Blog"}},child2111122={parent:child211112,text:{name:"Gagan, K",title:"Started Writing Blog"}},child2221={parent:child222,text:{name:"Sourabh, Kulkarni",title:"Started Writing Blog"}},child2222={parent:child222,text:{name:"Vinayak Nath, Singh",title:"Started Writing Blog"}},child21121={parent:child2112,text:{name:"Kulkarni, Shruti",title:"Started Writing Blog"}},child21122={parent:child2112,text:{name:"Agarwal, Vaibhav",title:"Started Writing Blog"}},child211211={parent:child21121,text:{name:"Shalini, Jha",title:"Started Writing Blog"}},child211212={parent:child21121,text:{name:"Shweta, Johari",title:"Started Writing Blog"}},child2121={parent:child212,text:{name:"Jemma, Vince",title:"Started Writing Blog"}},child2122={parent:child212,text:{name:"Rishabh, Gour",title:"Started Writing Blog"}},child21211={parent:child2121,text:{name:"Vigneshwari, Sambandan",title:"Started Writing Blog"}},child21212={parent:child2121,text:{name:"Anagha, Ravinarayan",title:"Started Writing Blog"}};chart_connector_config=[config_connector,mainParent,child1,child2,child11,child12];
