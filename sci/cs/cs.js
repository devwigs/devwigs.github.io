let link = {title:"General Links", icon:"link", menu:[
    {title:"Email Mr. MacCarthy", icon:"mail", open:"mailto:david.maccarthy@eips.ca"},
    {title:"Python Tutorial", icon:"py", open:"https://docs.python.org/3.8/tutorial/"},
    {title:"Thonny (Python IDE)", icon:"thonny", open:"https://thonny.org/"},
    // {title:"thonny.bat", icon:"", gdrv:"1dfiWkR-wXMEl5VgBkebt6Dlfj59TeaGT"},
    {title:"thonny.bat", icon:"link", open:"https://eipsca-my.sharepoint.com/:u:/r/personal/david_maccarthy_eips_ca/Documents/public/thonny.bat?csf=1&web=1&e=7wTBkW"},
    {title:"PowerSchool", icon:"ps", open:"https://powerschool.eips.ca/public/"},
    {title:"Salisbury Composite", icon:"sal", open:"https://salcomp.ca"},
    {title:"Program of Studies", icon:"ab", open:"https://education.alberta.ca/career-and-technology-studies/bit-cluster-businessadminfinanceit/?searchMode=3"},
    {title:"Course Outline", icon:"link", open:"https://docs.google.com/document/d/1ElD-IF84gr2epoYlVpRtMFDyBv3EEbhGF0moBBoObSE"},
]};

// let link10 = {title:"Course Links", icon:"link", menu:[
//     {title:"Brightspace", icon:"bs", open:"https://eips.brightspace.com/d2l/home/26894"},
//     {title:"repl.it Template", icon:"py", open:"https://replit.com/@DavidMacCarthy/CS10"},
// ]};

let iter = {title:"Iterative Algorithms", id:"iter", icon:"py", menu:[
    {title:"Linear Search", icon:1, href:"iter/search.html"},
    {title:"Binary Search", icon:1, href:"iter/bsearch.html"},
    {title:"Bubble Sort", icon:1, href:"iter/bubble.html"},
    {title:"Insertion Sort", icon:1, href:"iter/insert.html"},
    {title:"Selection Sort", icon:1, href:"iter/sel.html"},
    {title:"Merging Sorted Data", icon:1, href:"iter/merge.html"},
]};

// let iter30 = deep(iter);
// iter30.id = "iter30";

let repl_html = "<p>Login to your <a href='https://repl.it' target='repl'>repl.it</a> account first. Then create a “fork” of each of the repl’s below and share it with your teacher.</p>";

// <p>These assignments, and the summative assessment, comprise CSE 1010.</p>

let cs1_html = `<section>
    <p>For each topic, open the link and save a copy of the document in your Google Docs <code>CS10</code> folder.
        Watch the lesson video or read the notes, and then answer the questions. After completing all assignments, contact the teacher to schedule the summative assessment.</p>
    </section>`;

let home = addHome({title:"Computing Science", id:"home", htmx:"<p class='Right'>Teacher: <a href='mailto:david.maccarthy@eips.ca'>D.G. MacCarthy</a></p>", menu:[
    link,
    {title:"Computing Science 10", id:"cs10", icon:"robot", menu:[
        {title:"repl.it", icon:"repl", open:"https://replit.com"},
        {title:"Brightspace", icon:"bs", open:"https://eips.brightspace.com/d2l/home/40003"},
        // {title:"repl.it Online IDE", icon:"repl", html:repl_html, menu:[
        //     {title:"Python repl", icon:"repl", open:"https://replit.com/@DavidMacCarthy/CS10"},
        // ]},
        {title:"Structured Programming 1", id:"sp1", icon:"py", menu:[
            {title:"Intro to Programming", icon:1, href:"sp1/intro.html"},
            {title:"Integrated Development Environments", icon:1, href:"sp1/ide.html"},
            {title:"Programming in Python", icon:1, href:"sp1/python.html"},
            {title:"Comments & Docstrings", icon:1, href:"sp1/comment.html"},
            {title:"Variables", icon:1, href:"sp1/var.html"},
            {title:"Input & Output", icon:1, href:"sp1/io.html"},
            {title:"Data Types (Classes)", icon:1, href:"sp1/type.html"},
            {title:"Modules & Packages", icon:1, href:"sp1/mod.html"},
            {title:"Operators", icon:1, href:"sp1/oper.html"},
        ]},
        {title:"Computing Theory 1", icon:"laptop", id:"ct1", html:cs1_html, menu:[
            {title:"Binary Encoding", icon:1, vid:"#PLpVmtCaB-lykMzpjcg79la6effekhfsJq", menu:[
                {title:"Assignment", gdoc:"1uD73FDAhv1AiH5rVPLIsZn-acMjGY09gNxLbEozjDA4"},
            ]},
            {title:"Text Encoding", icon:1, vid:"MijmeoH9LT4", menu:[
                {title:"Assignment", gdoc:"1wGMBQAUTTSNcbZPeNOf8BO6yVw7p2yHcHxeQ-acCbyM"},
            ]},
            {title:"Von Neumann Architecture", icon:1, vid:"HEjPop-aK_w", menu:[
                {title:"Assignment", gdoc:"1dQAlZuVoWrzjZT-19dEB5gvnysCwPRGYu_AkQPQooMg"},
            ]},
            {title:"Computing Science", gdoc:"13cPWZNfIyKYM6DPi_IxaVgUSj0b8II1kCzZVfvLZyOc"},
            {title:"Algorithms", icon:1, href:"ct1/algo.html"},
        ]},
        {title:"Structured Programming 2", id:"sp2", icon:"py", menu:[
            {title:"Boolean Values & Operators", icon:1, href:"sp2/bool.html"},
            {title:"Conditional Statements", icon:1, href:"sp2/if.html"},
            {title:"Loops", icon:1, href:"sp2/loop.html"},
            {title:"Flags & Counters", icon:1, href:"sp2/flag.html"},
            {title:"Iteration & Searching", icon:1, href:"sp2/iter.html"},
            {title:"Formatted Output", icon:1, href:"sp2/format.html"},
            {title:"Accumulation", icon:1, href:"sp2/accum.html"},
            {title:"String Methods", icon:1, href:"sp2/str.html"},
        ]},
        {title:"Robotics Programming", id:"robo", icon:"robot", menu:[
            {title:"Robotics repl", icon:"repl", open:"https://replit.com/@DavidMacCarthy/Robo"},
            {title:"Intro to Robotics Programming", icon:1, href:"robo/intro.html"},
            {title:"Turning the Robot", icon:1, href:"robo/turn.html"},
            {title:"Functions & Arguments", icon:1, href:"robo/func.html"},
            {title:"Colours & Sensors", icon:1, href:"robo/colour.html"},
            {title:"Soccer Challenge", icon:1, href:"robo/soccer.html"},
            {title:"Lists", icon:1, href:"robo/list.html"},
            {title:"Parking Lot Challenge", icon:1, href:"robo/park.html"},
        ]},
    ]},
    {title:"Computing Science 20", id:"cs20", icon:"py", menu:[
        {title:"repl.it", icon:"repl", open:"https://replit.com"},
        {title:"Brightspace", icon:"bs", open:"https://eips.brightspace.com/d2l/home/42228"},
        // link20,
        // {title:"repl.it Online IDE", icon:"repl", html:repl_html, menu:[
        //     {title:"Web Programming", icon:1, open:"https://replit.com/@DavidMacCarthy/Web1"},
        //     {title:"Python Programming", icon:1, open:"https://replit.com/@DavidMacCarthy/CS20"},
        // ]},
        {title:"Web Programming 1", id:"web1", icon:"html5", menu:[
            {title:"Internet & World Wide Web", icon:1, href:"web1/internet.html"},
            {title:"Data Trees", icon:1, href:"web1/tree.html"},
            {title:"eXtensible Markup Language", icon:1, href:"web1/xml.html"},
            {title:"Text & Comment Nodes", icon:1, href:"web1/text.html"},
            {title:"Entities", icon:1, href:"web1/entity.html"},
            {title:"Hypertext Markup Language (HTML)", icon:1, href:"web1/html5.html"},
            {title:"Character Formatting", icon:1, href:"web1/char.html"},
            {title:"Images & Video", icon:1, href:"web1/image.html"},
            {title:"Lists & Tables", icon:1, href:"web1/list.html"},
        ]},
        {title:"Web Programming 2", id:"web2", icon:"html5", menu:[
            {title:"Forms", icon:1, href:"web2/form.html"},
            {title:"Style Sheets (CSS)", icon:1, href:"web2/style.html"},
            {title:"External Stylesheets", icon:1, href:"web2/ext.html"},
            {title:"Document Divisions", icon:1, href:"web2/div.html"},
            {title:"Javascript", icon:1, href:"web2/js.html"},
        ]},
        {title:"Procedural Programming", id:"pp", icon:"py", menu:[
            {title:"Functions", icon:1, href:"pp/func.html"},
            {title:"Variable Scope", icon:1, href:"pp/scope.html"},
            {title:"Top-Down Design", icon:1, href:"pp/top.html"},
            {title:"Pre- & Post-Conditions", icon:1, href:"pp/pre.html"},
            {title:"Exception Handling", icon:1, href:"pp/except.html"},
        ]},
        {title:"Video Game Project", id:"game", icon:"sc8pr", menu:[
            {title:"Sketches & Sprites", icon:1, href:"game/sketch.html"},
            {title:"Customizing the Animation", icon:1, href:"game/custom.html"},
            {title:"Text in Animations", icon:1, href:"game/text.html"},
            {title:"Keyboard Events", icon:1, href:"game/key.html"},
            {title:"Mouse Events", icon:1, href:"game/mouse.html"},
        ]},
        {title:"Data Structures", id:"ds", icon:"py", menu:[
            {title:"Tuples & Lists", icon:1, href:"ds/list.html"},
            {title:"Iteration", icon:1, href:"ds/iter.html"},
            {title:"Dictionaries & Sets", icon:1, href:"ds/dict.html"},
            {title:"Positional & Keyword Arguments", icon:1, href:"ds/args.html"},
            {title:"List Comprehensions", icon:1, href:"ds/comp.html"},
            {title:"Generator Functions", icon:1, href:"ds/gen.html"},
            {title:"Arrays", icon:1, href:"ds/array.html"},
        ]},
        iter,
        // {title:"File Structures", id:"fs", icon:"laptop", menu:[
        //     {title:"", icon:"py", href:"fs/.html"},
        // ]},
    ]},
    {title:"Computing Science 30", id:"cs30", icon:"py", html:"After completing the first three courses, please consult with your teacher regarding your remaining credits.", menu:[
        {title:"repl.it", icon:"repl", open:"https://replit.com"},
        {title:"Brightspace", icon:"bs", open:"https://eips.brightspace.com/d2l/home/42232"},
        // {title:"repl.it Online IDE", icon:"repl", html:repl_html, menu:[
        //     {title:"Python repl", icon:"repl", open:"https://replit.com/@DavidMacCarthy/CS30"},
        //     {title:"Java repl", icon:"repl", open:"https://replit.com/@DavidMacCarthy/Java"},
        // ]},
        // link30,
        // iter30,
        {title:"Object-Oriented Programming 1", id:"oop1", icon:"py", menu:[
            {title:"Objects", icon:1, href:"oop1/obj.html"},
            {title:"Modifiers & Accessors", icon:1, href:"oop1/mod.html"},
            {title:"Special Methods", icon:1, href:"oop1/spec.html"},
            {title:"Inheritance", icon:1, href:"oop1/inher.html"},
        ]},
        {title:"Recursive Algorithms", id:"rec", icon:"py", menu:[
            {title:"Recursion", icon:1, href:"rec/rec.html"},
            {title:"Sorting Algorithms", icon:1, href:"rec/sort.html"},
            {title:"Recursion Issues", map:0, gdoc:"1x_i3tMBMnfTQDwjg5qAS0xAcxHh-_-g22NdZ9J4eQAo"},
        ]},
        {title:"Dynamics Data Structures", id:"dds1", icon:"py", menu:[
            {title:"Linked Lists", icon:1, href:"dds1/linkedList.html"},
            {title:"Modifying Linked Lists", icon:1, href:"dds1/mod.html"},
            {title:"Searching & Sorting", icon:1, href:"dds1/sort.html"},
        ]},
    ]},
]});
