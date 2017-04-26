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
        HTMLclass: 'green',
        text: {
            name: "Amit Mishra",
            contact: { 
            val: "Code Coverage for S/4 HANA apps",
                href: "https://jam4.sapjam.com/groups/xspW69TpSt2bMffMUFAnjy/documents/gDNpotIwhehoYefRuZqApY/slide_viewer",
                target: "_blank"
            }
        },
        image: "./images/I043155.jpg"
    },
    child1 = {
        parent: mainParent,
        HTMLclass: 'green-top50',
        text:{
            name: "Rohit Negi",
            contact: { 
                val: "Fiori Launchpad (FLP)",
                href: "https://jam4.sapjam.com/profile/4trybpJxmqo3vJj0TcUlRy/documents/X3wNojaoBzuTNSgAwew1yY",
                target: "_blank"
            }
        },
        image: "./images/I064952.jpg"
    },
    child2 = {
        parent: mainParent,
        HTMLclass: 'green',
        text:{
            name: "Shashank, Kulshrestha",
            contact: { 
                val: "How to use HANA database as service in SCP",
                href: "https://jam4.sapjam.com/profile/J3tnIiYdWQ5k114tkqxcK2/documents/dfh9q5awuwsbH4K1g5z5ed",
                target: "_blank"
            }
        },
        image: "./images/I331657.jpg"
    },
    child11 = {
        HTMLclass: 'green',
        parent: child1,
        text:{
            name: "Jayendra kartheek, Garnimetta",
            contact: { 
                val: "AMD & UI5",
                href: "https://jam4.sapjam.com/profile/bXWa3qEpS4zSs7SGA3H1VL/documents/J6F6Z1R4WIw2NkwV5Ek9lp",
                target: "_blank"
            }
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
            contact: { 
                val: "Identity and Access Management",
                href: "https://jam4.sapjam.com/blogs/show/92PBNa3NKlCcbocPkT9yeP",
                target: "_blank"
            }
            
        },
        image: "./images/I311168.jpg"
    },
    child22 = {
        HTMLclass : "green-top50",
        parent: child2,
        text:{
            name: "Achint Kumar, Rathor",
            contact: { 
                val: "Leveraging SCP services \r\n with our daily applications",
                href: "https://jam4.sapjam.com/profile/fjIXTVQipnyoZzYWB0re6X/documents/AMdpgHlmuLTfqC7t2SkmjS",
                target: "_blank"
            }
        },
        image: "./images/I331047.jpg"
    },
    child111 = {
        HTMLclass: "green",
        parent: child11,
        text:{
            name: "Sreejith, Mohan Menon",
            contact: { 
                val: "Developer OPS",
                href: "https://jam4.sapjam.com/groups/xspW69TpSt2bMffMUFAnjy/documents/beBvh5cOEdEq844f3Xi7ZA/",
                target: "_blank"
            }
        },
        image: "./images/I043373.jpg"
    },
    child112 = {
        HTMLclass: 'green',
        parent: child11,
        text:{
            name: "Thejes, A.G",
            contact: { 
                val: "Concept paper for Procure Area",
                href: "https://jam4.sapjam.com/profile/3KQfOGbCRUwevjnRMQJy0o/documents/2V5L87b7IMZP4UrJGmSSuG",
                target: "_blank"
            }
        },
        image: "./images/I060438.jpg"
    },
    child211 = {
        HTMLclass: 'green',
        parent: child21,
        text:{
            name: "Sameer, Menon",
            contact: { 
                val: "Documentation in Ixiasoft \r\n DITA CMS",
                href: "https://jam4.sapjam.com/profile/NMjyYiTVkHl0Q8n6M5ELll/documents/dLRTFnACqdamDzRoAACVoX",
                target: "_blank"
            }
        },
        image: "./images/I331652.jpg"
    },
    child212 = {
        HTMLclass: "green-top50",
        parent: child21,
        text:{
            name: "Kriti, Srivastava",
            contact: { 
                val: "How to develop an \r\n Analytical List Page application",
                href: "https://jam4.sapjam.com/profile/n048yOIRaa0RuSUdLEQWBa/documents/AHRe4haPkIpwlvKTID43So",
                target: "_blank"
            }
        },
        image: "./images/I331382.jpg"
    },
    child221 = {
        HTMLclass:"green",
        parent: child22,
        text:{
            name: "Vipin,\r\nShivashankaran",
            contact: { 
                val: "Big Data Analytical\r\n Models and Algorithms",
                href: "https://jam4.sapjam.com/profile/0mxvG90hH6EBA4tznbpwLk/documents/lQKtaCtVNXv4y8O2lHKCdy",
                target: "_blank"
            }
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
        HTMLclass: 'green-top50',
        parent: child211,
        text:{
            name: "Pramod, Indiresh",
            contact: { 
                val: "S/4HANA Project Onboarding",
                href: "https://jam4.sapjam.com/profile/3ydEu8ALXJLcGuxJ1KRqal/documents/iGIwn8uXW6PqMuSbrSCI0m",
                target: "_blank"
            }
        },
        image: "./images/I053023.jpg"
    },

    child2112 = {
        HTMLclass: "green-top50",
        parent: child211,
        text:{
            name: "Priya, Powar",
            contact: { 
                val: "Steps to Implement \r\n non-standard UI elements \r\n using ABAP and extensions",
                href: "https://jam4.sapjam.com/profile/UkXlkP7ErUirpey2LZTjoX/documents/UpdXdJr5XvLptAGBJehb88",
                target: "_blank"
            }
             
        },
        image: "./images/I331407.jpg"
    },
    child21111 = {
        HTMLclass: "green-bottom50",
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
        HTMLclass: "green",
        parent: child21111,
        text:{
            name: "Debasish, Panda",
            contact: { 
                val: "Influence of Personality \r\n type on a Team Player(HR)",
                href: "https://jam4.sapjam.com/profile/6Q2XAYjsfhHWrRlk5fbOMM/documents/X07Cf0bXDgTlpODBWqPxet",
                target: "_blank"
            }
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
        HTMLclass:"green",
        parent: child222,
        text:{
            name: "Vinayak Nath, Singh",
            contact: { 
                val: "HTTP to ODATA Evolution",
                href: "https://jam4.sapjam.com/profile/0jxcAAyn8yd9erj6zLqG2w/documents/nMn0x2Lt16XAHbmQUlKUXp",
                target: "_blank"
            }
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
        HTMLclass: "green-top50",
        parent: child212,
        text:{
            name: "Jemma, Vince",
            contact: { 
                val: "Make use of \r\n eCATT script for creating data.",
                href: "https://jam4.sapjam.com/profile/31zMgVfGgHFDQDO0WYu6o0/documents/u0ngCRJCYAhaMtySELJrRN",
                target: "_blank"
            }
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
         HTMLclass: 'green',
        parent: child2122,
        text:{
            name: "Amitha, Srinivasan",
            contact: { 
                val: "BOPF",
                href: "https://jam4.sapjam.com/groups/xspW69TpSt2bMffMUFAnjy/documents/NjKuJ5hN3UEvNW35hFTjtG",
                target: "_blank"
            }
        },
        image: "./images/I304332.jpg"
    },
    child212211 = {
        HTMLclass: 'green',
        parent: child21221,
        text:{
            name: "Bhuvana, Raju",
            contact: { 
                val: "Metadata Extension, \r\n Analytical Column Extension & \r\n CDS facets annotation",
                href: "https://jam4.sapjam.com/profile/TpNxqn8bogdWpQi2V1rL2l/documents/tovMOrFIb2iu3G7T68im69",
                target: "_blank"
            }
        },
        image: "./images/I331594.jpg"
    },
    child212212 = {
        HTMLclass:"green",
        parent: child21221,
        text:{
            name: "Alik, Garai",
            contact: { 
                val: "Extending Applications",
                href: "https://jam4.sapjam.com/profile/BUEFvqDE5AbTF19Xn3JnAq/documents/oDzpsZU0Iu4DH2fkgTYPUf",
                target: "_blank"
            }
        },
        image: "./images/I332308.jpg"
    },
    child2122121 = {
        HTMLclass : "green",
        parent: child212212,
        text:{
            name: "Shivakumar",
            contact: { 
                val: "How to create Analytical View",
                href: "https://jam4.sapjam.com/profile/tapXgh0C9BmB5IJuE5yP7u/documents/B4gkrNbWoZNV33yXVQUpfm",
                target: "_blank"
            }
        },
        image: "./images/I329330.jpg"
    },
    child2122122 = {
        HTMLclass:"green",
        parent: child212212,
        text:{
            name: "Vishwarajsinh, Sodha",
            contact: { 
                val: "Quality Management Process Overview",
                href: "https://jam4.sapjam.com/profile/UpqFDTFUkrZ8v3hlbKaorF/documents/MAMA3Q5wXzEFL3Mkke6W8N",
                target: "_blank"
            }
        },
        image: "./images/I332723.jpg"
    },
    child21222 = {
        HTMLclass: "green-top50",
        parent: child2122,
        text:{
            name: "Shivani, Kandavelu",
            contact: { 
                val: "creating and utilizing \r\n Authorisation Objects",
                href: "https://jam4.sapjam.com/profile/UA7lQP6DfLKby0B6mWDFyO/documents/r1VhyKjnOwox1WFZWWJlZh",
                target: "_blank"
            }
        },
        image: "./images/I330821.jpg"
    },
    child212221 = {
        HTMLclass : "green-bottom50",
        parent: child21222,
        text:{
            name: "Shiv Shankar, S.S.V",
            title: "Started Writing Blog"
        },
        image: "./images/I330820.jpg"
    },
    child2122211 = {
        HTMLclass : "green",
        parent: child212221,
        text:{
            name: "Keerthi Abinesh, Ravikumar",
            title: "",
            contact: { 
                val: "CDS Test Double Framework",
                href: "https://jam4.sapjam.com/profile/mlgpz7XBbZUEKOZisZypIU/documents/YgJ28mzKHV2Y4hNkRAVe0h",
                target: "_blank"
            }
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
        HTMLclass:"green-top50",
        parent: child212221,
        text:{
            name: "Narendran, N.V",
            contact: { 
                val: "Leveraging more of ABAP CDS",
                href: "https://jam4.sapjam.com/profile/NZoAge5QtlhMjhizAhu2fN/documents/m94BpJ2nnnDpsMCaMZSca5",
                target: "_blank"
            }
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
        HTMLclass: "green",
        parent: child2121,
        text:{
            name: "Vigneshwari, Sambandan",
            contact: { 
                val: "Types of navigation in FLP",
                href: "https://jam4.sapjam.com/profile/fLIz8YDXHos2FDD0V8Nwa9/documents/eGOVJeSQozJxfxBGzIUWLs",
                target: "_blank"
            }
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
            contact: { 
                val: "Quality Assurance",
                href: "https://jam4.sapjam.com/profile/0UMxunDTNOwnwPac26gqJG/documents/6mzxPaqt6a0gNvb5qp4LCo",
                target: "_blank"
            }
        },
        image: "./images/I071993.jpg"
    },
    child2121221 = {
        HTMLclass: 'green-top50',
        parent: child212122,
        text:{
            name: "Mangkhankhual, Hangshing",
            contact: { 
                val: "How to design Gamification",
                href: "https://jam4.sapjam.com/albums/K8CvJYCAXTfIzXH862ngED/photos/wGGOdGX8Qw85Aj7PcygqCn",
                target: "_blank"
            }
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
        HTMLclass : "green",
        parent: child212122,
        text:{
            name: "Preethi, Ramamourthy",
            contact: { 
                val: "Authorization testing in cloud system",
                href: "https://jam4.sapjam.com/profile/bSwvd4hgwsuneFsC91f122/documents/GtO9esUL5wruqzP2XZyITj",
                target: "_blank"
            }
        },
        image: "./images/I331397.jpg"
    },
    child21212221 = {
        HTMLclass: "green",
        parent: child2121222,
        text:{
            name: "Vighneswaran, CE",
            contact: { 
                val: "Steps to Create \r\n UI Project Project Portal",
                href: "https://jam4.sapjam.com/profile/2frAMd61QZnYsJWIywR6EP/documents/qrOS8S3q0oZYxtCSlYjDEH",
                target: "_blank"
            }
        },
        image: "./images/I049143.jpg"
    },
    child21212222 = {
        HTMLclass : "green",
        parent: child2121222,
        text:{
            name: "Madhu, GC",
            contact: { 
                val: "CDS/SQL Performance trace and Analysis",
                href: "https://jam4.sapjam.com/profile/6uBJuXU8M24adaMsTx5GVv/documents/noIan1Fsn3TcdWi6TwpbMj",
                target: "_blank"
            }
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
        HTMLclass:"green-bottom50",
        parent: child212121,
        text:{
            name: "Rimi, DE",
            title: "Started Writing Blog"
        },
        image: "./images/I311155.jpg"
    },
    child21212121 = {
        HTMLclass:"green",
        parent: child2121212,
        text:{
            name: "Pavan, Chittanpalli Vasudevan",
            contact: { 
                val: "Data Protection Management System (DPMS)",
                href: "https://jam4.sapjam.com/profile/jOhG5eKlecoc9oEAMAFmg4/documents/aC17uBdAOWM1qZj1zkKQ2C",
                target: "_blank"
            }
        },
        image: "./images/I032875.jpg"
    },
    child212121211 = {
        HTMLclass:"green",
        parent: child21212121,
        text:{
            name: "Karthik, M.K.", 
            contact: { 
                val: "An Overview on Digital Core, \r\n the need & SAP's offering",
                href: "https://jam4.sapjam.com/profile/2a0Srzz6vfERufI8lDuVmW/documents/ydYf2hcv9lGDZ1yloULWYT",
                target: "_blank"
            }
            
        },
        image: "./images/I032429.jpg"
    },
    child212121212 = {
        HTMLclass:"green",
        parent: child21212121,
        text:{
            name: "Shwetha Monappa, Nairy",
            contact: { 
                val: "What is the best delivery model \r\n for a unit that works on \r\n Apps for Cloud ",
                href: "https://jam4.sapjam.com/profile/3oONVQywgecSNmqZmIBOyz/documents/Ewg1QYVUNu8rqqhPXXhOF6",
                target: "_self"
            }
        },
        image: "./images/I062039.jpg"
    },
    child21212122 = {
        HTMLclass:"green",
        parent: child2121212,
        text:{
            name: "Kanhu, Ranjan Padhi",
            contact: { 
                val: "PPDS – Capacity Utilization Object Page ",
                href: "https://jam4.sapjam.com/blogs/show/0nSgm4clEwzwUmN19JC0FM",
                target: "_blank"
            }
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
