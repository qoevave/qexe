"use strict";(self.webpackChunkqexe_website=self.webpackChunkqexe_website||[]).push([[5585],{9258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var i=n(4848),r=n(8453),s=n(8973),a=n(272);const o=n.p+"assets/images/TestManager_2-5739e27f37a7705fc794d6b8eaa992a0.png",c={sidebar_position:3,custom_edit_url:null},d="Unity Client",l={id:"qexe-architecture/unity-client",title:"Unity Client",description:"(shadow) TestManager.cs",source:"@site/docs/qexe-architecture/unity-client.mdx",sourceDirName:"qexe-architecture",slug:"/qexe-architecture/unity-client",permalink:"/qexe/docs/qexe-architecture/unity-client",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Max/MSP Controller",permalink:"/qexe/docs/qexe-architecture/maxmsp-host"},next:{title:"OSC Communication",permalink:"/qexe/docs/qexe-architecture/communication"}},h={},u=[{value:"(shadow) TestManager.cs",id:"shadow-testmanagercs",level:2},{value:"Inspector",id:"inspector",level:3},{value:"SetMethodologyInterface(args)",id:"setmethodologyinterfaceargs",level:3},{value:"Description",id:"description",level:4},{value:"Customization options",id:"customization-options",level:4},{value:"SetQuestionnaireInterface(args)",id:"setquestionnaireinterfaceargs",level:3},{value:"Description",id:"description-1",level:4},{value:"Customization options",id:"customization-options-1",level:4},{value:"TestRecorder.cs",id:"testrecordercs",level:2},{value:"Inspector",id:"inspector-1",level:3},{value:"Description",id:"description-2",level:4},{value:"QExEPlaybackSync.cs",id:"qexeplaybacksynccs",level:2},{value:"Inspector",id:"inspector-2",level:3},{value:"Description",id:"description-3",level:4},{value:"QExEAudioObject.cs",id:"qexeaudioobjectcs",level:2},{value:"Inspector",id:"inspector-3",level:3},{value:"Description",id:"description-4",level:4}];function m(e){const t={b:"b",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"unity-client",children:"Unity Client"}),"\n",(0,i.jsx)(t.h2,{id:"shadow-testmanagercs",children:"(shadow) TestManager.cs"}),"\n",(0,i.jsxs)(t.p,{children:["Inside the Unity ",(0,i.jsx)(t.code,{children:"_config"})," scene the shadow ",(0,i.jsx)(t.code,{children:"testmanager.cs"})," component can be found in the Unity hierarchy under the ",(0,i.jsx)(t.code,{children:"TestManager"})," object."]}),"\n",(0,i.jsxs)(t.p,{children:["The TestManager component will persis from the ",(0,i.jsx)(t.code,{children:"_config"})," scene into all subsequent ",(0,i.jsx)(t.code,{children:"_evaluation"})," and ",(0,i.jsx)(t.code,{children:"_questionnaire"})," scenes, to ensure that the correct interfaces, and the next item can be correctly loaded, until returning to the ",(0,i.jsx)(t.code,{children:"_config"})," scene."]}),"\n",(0,i.jsx)(t.h3,{id:"inspector",children:"Inspector"}),"\n",(0,i.jsx)(a.A,{description:{title:"",content:(0,i.jsxs)(t.p,{children:["The shadow testmanager.cs in the QExE agent Unity project receives information from the QExE Controller throughout the test. On the right hand side we have a number of field entries: ",(0,i.jsx)(t.br,{}),(0,i.jsx)(t.br,{}),(0,i.jsx)(t.b,{children:"OSCManager"})," is the object that has both transmitter and receiver for the OSC connection over UDP. ",(0,i.jsx)(t.br,{}),(0,i.jsx)(t.b,{children:"btn/Next"})," and ",(0,i.jsx)(t.b,{children:"btn/StartPlayback"})," are mandatory buttons that need to be found on an imported method interface.",(0,i.jsx)(t.br,{}),(0,i.jsx)(t.br,{}),(0,i.jsx)(t.b,{children:"Current Item"})," shows information related to the current evaluation item.",(0,i.jsx)(t.br,{}),(0,i.jsx)(t.b,{children:"Next Item"})," shows the same information related to the next item. ",(0,i.jsx)(t.br,{}),(0,i.jsx)(t.br,{}),"The ",(0,i.jsx)(t.b,{children:"Questionnaire"})," field shows the name of the questionnaire received from the QExE controller, and how it should be integrated. Below is a user defined array where Unity interfaces can be added. If Unity detects an interface matching the name of the received questionnaire, this will be used.  ",(0,i.jsx)(t.br,{}),(0,i.jsx)(t.br,{}),"The ",(0,i.jsx)(t.b,{children:"Methodology"})," field shows the name of the test method received from the QExE controller. Additionally, the number of parallel audio conditions is also sent which is needed to set interface number of buttons and sliders. Below is a user defined array where Unity interfaces can be added. If Unity detects an interface matching the name of the received methodology, this will be used."]})},imagePath:o}),"\n",(0,i.jsx)(t.h3,{id:"setmethodologyinterfaceargs",children:"SetMethodologyInterface(args)"}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Gets called on every onSceneLoad(), with the name of the received test method as an argument."}),"\n",(0,i.jsx)(t.li,{children:"The method name is than compared against the list of methods seen in the inspector. If a match is found, the method prefab is instantiated in the scene as a child of a specific object that the user can turn on and off."}),"\n",(0,i.jsx)(t.li,{children:"Once instantiated, references to the btn/Next and btn/StartPlayback buttons are found such that we can control OSC messages."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"customization-options",children:"Customization options"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you wish to add your own method, then add a new empty field entry into the testmanager.cs inspector, and drag and drop your method prefab into the new field. Be sure to have adapted the QExE controller setTestMethod() function to recognize your questionnaire name, in addition to creating a corresponding ",(0,i.jsx)(t.code,{children:".maxpat"})," to load into the method container module, and code to calculate a the number of test items."]}),"\n"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(t.p,{children:"... see code ..."})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",metastring:'title="./Assets/QExE/Scripts/TestManager.cs"',children:'private void SetMethodologyInterface(string method){\n\n    // Instantiate correct test interface prefab\n    foreach (GameObject Interface in MethodologyInterfaces){\n        if (Interface.name == method){\n          Debug.Log("<color=bright_white><b>QExE: </b></color> Method found. " + Interface.name + ": The method interface provided by the server(JSON file) is listed in the Method Interfaces array. Importing into scene.");\n          _Methodology = Instantiate(Interface, TestInterface.transform.position, Quaternion.Euler(TestInterface.transform.rotation.eulerAngles.x, TestInterface.transform.rotation.eulerAngles.y, TestInterface.transform.rotation.eulerAngles.z), TestInterface.transform) as GameObject;\n        }\n\t}\n\n    // Get reference to the Next and Startplayback buttons\n    NextButton = GameObject.Find("btn/Next").GetComponent<Button>();\n    StartPlaybackButton = GameObject.Find("btn/StartPlayback").GetComponent<Button>();\n    InterfaceNextButtonFound = true;\n    InterfacePlayButtonFound = true;\n\n    // Set the next button interatable false, so users do not accidently click it to start with. \n    NextButton.interactable = false;\n\n    // Add event listeners\n    NextButton.onClick.AddListener(() => OnNextButton());\n    StartPlaybackButton.onClick.AddListener(() => OnStartPlayback());\n\n    TestInterface.SetActive(false);\n}\n'})})]}),"\n",(0,i.jsx)(t.h3,{id:"setquestionnaireinterfaceargs",children:"SetQuestionnaireInterface(args)"}),"\n",(0,i.jsx)(t.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Gets called on every onSceneLoad() if the current scene is equal to ",(0,i.jsx)(t.code,{children:"_questionnaire"}),", with the name of the received questionnaire as an argument."]}),"\n",(0,i.jsx)(t.li,{children:"The questionnaire name is than compared against the list of methods seen in the inspector. If a match is found, the questionnaire prefab is instantiated in the scene as a child of a specific object."}),"\n",(0,i.jsx)(t.li,{children:"Once instantiated, references to the btn/Next button is found such that we can control OSC messages."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"customization-options-1",children:"Customization options"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you wish to add your own questionnaire, then add a new empty field entry into the testmanager.cs inspector, and drag and drop your questionnaire prefab into the new field. Be sure to have adapted the QExE controller setQuestionnaire() function to recognize your questionnaire name, in addition to creating a corresponding ",(0,i.jsx)(t.code,{children:".maxpat"})," to load into the questionnaire container module."]}),"\n"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(t.p,{children:"... see code ..."})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",metastring:'title="./Assets/QExE/Scripts/TestManager.cs"',children:'private void SetQuestionnaireInterface(string questionnaire)\n{\n    // Instantiate correct test interface prefab\n    GameObject QuestionnaireInterface = GameObject.Find("QExEQuestionnaireInterface");\n    foreach (GameObject Interface in QuestionnaireInterfaces)\n    {\n        if (Interface.name == questionnaire)\n        {\n            Debug.Log("<color=bright_white><b>QExE: </b></color>Questionnaire found. " + Interface.name + ": The questionnaire interface provided by the server (JSON file) is listed in the Questionnaire Interfaces array. Importing into scene.");\n            _Questionnaire = Instantiate(Interface, QuestionnaireInterface.transform.position, Quaternion.Euler(QuestionnaireInterface.transform.rotation.eulerAngles.x, QuestionnaireInterface.transform.rotation.eulerAngles.y, QuestionnaireInterface.transform.rotation.eulerAngles.z), QuestionnaireInterface.transform) as GameObject;\n        }\n    }\n\n    // Get reference to the Next and Startplayback buttons\n    NextButton = GameObject.Find("btn/Next").GetComponent<Button>();\n    InterfaceNextButtonFound = true;\n\n    // Add event listeners\n    NextButton.onClick.AddListener(() => OnNextButton());\n}\n'})})]}),"\n",(0,i.jsx)(t.h2,{id:"testrecordercs",children:"TestRecorder.cs"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"TestRecorder.cs"})," component can be found in the Hierarchy of a scene under the ",(0,i.jsx)(t.code,{children:"TestManager"})," game object. As with the ",(0,i.jsx)(t.code,{children:"TestManager.cs"}),", the script will persist throughout all scenes to stream all relevant data into a behavior.txt file."]}),"\n",(0,i.jsx)(t.h3,{id:"inspector-1",children:"Inspector"}),"\n",(0,i.jsx)(s.A,{imageUrl:"../../img/screenshots/TestRecorder.png",alt:"test recorder Unity",width:"60%"}),"\n",(0,i.jsx)(t.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Receives the results directory of the subject, and creates a new streamwriter to save all OSC information."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"qexeplaybacksynccs",children:"QExEPlaybackSync.cs"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"PlaybackSync.cs"})," component can be found in the Hierarchy of a scene under ",(0,i.jsx)(t.code,{children:"QExE XR Set Up > QExEAnimationAudioSync"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"inspector-2",children:"Inspector"}),"\n",(0,i.jsx)(s.A,{imageUrl:"../../img/screenshots/PlaybackSync.png",alt:"playback sync Unity",width:"60%"}),"\n",(0,i.jsx)(t.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Can be used used to add any number of Unity game objects. The game objects will be deactivated until the user presses play, such that any animations that need to happen in sync with separate audio playback can be triggered simultaneously."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"qexeaudioobjectcs",children:"QExEAudioObject.cs"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"QExEAudioObject.cs"})," component can be attached to any game object inside a scene, that the user would like to track as an audio object."]}),"\n",(0,i.jsx)(t.h3,{id:"inspector-3",children:"Inspector"}),"\n",(0,i.jsx)(s.A,{imageUrl:"../../img/screenshots/ObjectTrigger.png",alt:"audio object trigger Unity",width:"60%"}),"\n",(0,i.jsx)(t.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Can be used used to identify any object as a QExE audio object that should be tracked with position and rotation updates when moved. The class features public methods which can then be used to send event-based triggers to the QExE Controller."}),"\n"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(t.p,{children:"... see code ..."})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",metastring:'title="./Assets/QExE/Scripts/QExEObjectTrigger.cs"',children:'public void TriggerAudio(int sampleIndex, string triggerMsg)\n{\n    var message_trigger = new OSCMessage("/stream/objectstrigger/");\n    message_trigger.AddValue(OSCValue.Int(sampleIndex+1));\n    message_trigger.AddValue(OSCValue.String("event"));\n    message_trigger.AddValue(OSCValue.String(triggerMsg));\n\n    if (_transmitter)\n    {\n        if (_transmitter.isActiveAndEnabled)\n            _transmitter.Send(message_trigger);\n    }\n}\n'})})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8973:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);const i="centerImg_af_H";var r=n(4848);const s=function(e){let{imageUrl:t,alt:n,width:s}=e;const a={width:s||"100%",justifyContent:"center"};return(0,r.jsx)("section",{className:i,children:(0,r.jsx)("img",{src:t,alt:n,style:a})})}},272:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);const i="textWithImageContainer_zrS_",r="textColumn_RGtL",s="imageColumn_L4Ue",a="img_bKr4";var o=n(4848);const c=e=>{let{description:t,imagePath:n}=e;return(0,o.jsxs)("div",{className:i,children:[(0,o.jsxs)("div",{className:r,children:[t.title&&(0,o.jsx)("h3",{children:t.title}),t.content]}),(0,o.jsx)("div",{className:s,children:(0,o.jsx)("img",{src:n,alt:"Your Image",className:a})})]})}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);