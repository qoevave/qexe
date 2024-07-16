"use strict";(self.webpackChunkqexe_website=self.webpackChunkqexe_website||[]).push([[7877],{9215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=t(4848),s=t(8453),o=t(8973);const a={sidebar_position:2,custom_edit_url:null},r="Max/MSP Controller",d={id:"qexe-architecture/maxmsp-host",title:"Max/MSP Controller",description:"testmanager.js",source:"@site/docs/qexe-architecture/maxmsp-host.mdx",sourceDirName:"qexe-architecture",slug:"/qexe-architecture/maxmsp-host",permalink:"/qexe/docs/qexe-architecture/maxmsp-host",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/qexe/docs/qexe-architecture/overview"},next:{title:"Unity Client",permalink:"/qexe/docs/qexe-architecture/unity-client"}},l={},c=[{value:"testmanager.js",id:"testmanagerjs",level:2},{value:"Location",id:"location",level:4},{value:"loadTest()",id:"loadtest",level:3},{value:"setQuestionnaire(args)",id:"setquestionnaireargs",level:3},{value:"Description",id:"description",level:4},{value:"Customization options",id:"customization-options",level:4},{value:"setTestMethod(args)",id:"settestmethodargs",level:3},{value:"Description",id:"description-1",level:4},{value:"Customization options",id:"customization-options-1",level:4},{value:"module_MethodQuestionnaireContainer.maxpat",id:"module_methodquestionnairecontainermaxpat",level:3},{value:"Patch-mode",id:"patch-mode",level:4},{value:"Presentation-mode (with ACR method and SSQ questionnaire)",id:"presentation-mode-with-acr-method-and-ssq-questionnaire",level:4},{value:"calculateParadigm()",id:"calculateparadigm",level:3},{value:"Description",id:"description-2",level:4},{value:"Customization options",id:"customization-options-2",level:4},{value:"setOSCManager()",id:"setoscmanager",level:3},{value:"Description",id:"description-3",level:4},{value:"Customization options",id:"customization-options-3",level:4},{value:"SetaudioConditions(args)",id:"setaudioconditionsargs",level:3},{value:"Description",id:"description-4",level:4},{value:"module_osc_handler.js",id:"module_osc_handlerjs",level:2},{value:"Location",id:"location-1",level:4},{value:"SetLocalVars(...args)",id:"setlocalvarsargs",level:3},{value:"Description",id:"description-5",level:4},{value:"TestManager(...args)",id:"testmanagerargs",level:3},{value:"Description",id:"description-6",level:4},{value:"Customization options",id:"customization-options-4",level:4},{value:"SendToUnity(...args)",id:"sendtounityargs",level:3},{value:"Description",id:"description-7",level:4},{value:"Customization options",id:"customization-options-5",level:4},{value:"module_OSCManager.maxpat",id:"module_oscmanagermaxpat",level:3},{value:"Location",id:"location-2",level:4}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"maxmsp-controller",children:"Max/MSP Controller"}),"\n",(0,i.jsx)(n.h2,{id:"testmanagerjs",children:"testmanager.js"}),"\n",(0,i.jsx)(n.h4,{id:"location",children:"Location"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"my-qexe-project\n\u2514\u2500 qexe_controller\n   \u2514\u2500 src\n      \u2514\u2500 code\n         \u251c\u2500\u2500 ...\n         \u251c\u2500\u2500 testmanager.js\n         \u2514\u2500\u2500 ...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"testmanager.js"})," script is the main code within the controller. From here, we can break down the highlighted functions."]}),"\n",(0,i.jsx)(n.h3,{id:"loadtest",children:"loadTest()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"_objtxt"})," : The JSON configuration file is saved into this dictionary which is accessed throughout the testmanager.js file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'{20,29-30,34,37,51,54} title="/src/code/testmanager.js" showLineNumbers',children:'function loadTest(filePath)\n{\n    var dict = new Dict;\n    dict.import_json(filePath);\n\n    // Output the dict to a dict.view class for viewing in the visual environment.\n    outlet(outlet_JSON, "json", \'clear\');\n    outlet(outlet_JSON, "json", "dictionary", dict.name);\n\n    // load the JSON file as a String.\n    var fileString = utilsmodule.loadFile(filePath);\n    SEND_PANEL_DIRECTORY_INFORMATION.message("DisplayTestFile", filePath);\n\n    // Removes any dynamically created objects in max patches. \n    // Objects created dynamically should be instantiated as global variables to be accessed in all functions. \n    clearPatchDynamicObjects();\n\n    // Convert the string to a javascript object.\n    try{\n        _objtxt = JSON.parse(fileString);\n    }catch(e){\n        error("Error loading file:", e);\n    }\n\n    // Set the incoming and outgoing UPD port information for osc messages.\n    setNetwork();\n\n    // Load in the correct questionnaire class.\n    setQuestionnaire(_objtxt.testSettings.questionnaireType,\n                     _objtxt.testSettings.questionnaireIntegration);\n\n    // Load in the correct method class and configure the test.\n    numberOfAudioRenderingVSTs = _objtxt.testSettings.audioRendering.audioVSTConditions.length;\n    setTestMethod(_objtxt.testSettings.methodType);\n\n    // Calculate the paradigm based of off the set variables in the JSON.\n    calculateParadigm();\n\n    // Randomize the order of test items. \n    randomizeSequence();\n\n    // Set directories. \n    SEND_MODULE_RESULTS_WRITER.message("OpenFolder", RESULTSDIRECTORY);\n    CONTENTDIRECTORY = _objtxt.testSettings.pathToAudioVideoScenesContent;\n    SEND_PANEL_DIRECTORY_INFORMATION.message("DisplayContentDirectory", CONTENTDIRECTORY);\n\n    // Reset the test back to the _Main scene if a new file is opened.\n    UpdateScenePanelInformation(-1);\n\n    // Set the information in the OSC manager. \n    SetOSCManager();\n\n    // Set the condition info to resultsWriter and Method.\n    SetaudioConditions(_objtxt.testSettings.audioRendering);\n\n    // Generic test information.\n    DisplayTestInformation();\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"setquestionnaireargs",children:"setQuestionnaire(args)"}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Takes the ",(0,i.jsx)(n.code,{children:"questionnaireType"})," and searches for the the correct entry. A string is then sent to the questionnaire containter to load a certain ",(0,i.jsx)(n.code,{children:".maxpat"})," file."]}),"\n",(0,i.jsxs)(n.li,{children:["Both the ",(0,i.jsx)(n.code,{children:"questionnaireType"})," and ",(0,i.jsx)(n.code,{children:"questionnaireIntegration"}),"entires are sent to the results module to ensure test information is also stored in the results files."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"customization-options",children:"Customization options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you would like to include your own questionnaire ",(0,i.jsx)(n.code,{children:".maxpat"})," file, add another case entry here that replaces the bpatcherQuestionnaire with the name of your ",(0,i.jsx)(n.code,{children:".maxpat"})," file. Make sure your ",(0,i.jsx)(n.code,{children:".maxpat"})," file has requirements to communicate with the rest of the code."]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"... show code ..."})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="/src/code/testmanager.js"',children:'function setQuestionnaire(questionnaireType, integrationType) {\n    if(questionnaireType === null){\n        SEND_MODULE_RESULTS_WRITER.message("SetInfoForQuestionnaire", 0, "null", "None");\n        return;\n    }\n\n    switch (questionnaireType){\n        case \'SSQ\':          \n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("patch", "script sendbox bpatcherQuestionnaire replace questionnaire_SSQ");\n            break;\n\n        case "NASA-TLX":\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("patch", "script sendbox bpatcherQuestionnaire replace questionnaire_NASA-TLX");\n            break;\n\n        default :\n            error("Error: questionnaireType : ", questionnaireType, " is not recognized in .json file.", "\\n");\n    }\n\n    post("Importing questionnaire:", questionnaireType, \'\\n\');\n    SEND_MODULE_RESULTS_WRITER.message("SetInfoForQuestionnaire", 1, questionnaireType, integrationType);\n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"settestmethodargs",children:"setTestMethod(args)"}),"\n",(0,i.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Takes the ",(0,i.jsx)(n.code,{children:"methodType"})," and searches for the the correct entry. A string is then sent to the method containter to load a certain ",(0,i.jsx)(n.code,{children:".maxpat"})," file. For certain methods, the number of audio renderers is also sent to the method container to initialize the test via the ",(0,i.jsx)(n.code,{children:"setTest()"})," function."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"customization-options-1",children:"Customization options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To include your method ",(0,i.jsx)(n.code,{children:".maxpat"}),",  add another case entry here that replaces the bpatcherQuestionnaire with the name of your ",(0,i.jsx)(n.code,{children:".maxpat"})," file. However, additional code must be added in order for the test items to be constructed. See calculateParadigm() below."]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"... show code ..."})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="/src/code/testmanager.js"',children:'function setTestMethod(method) {\n    switch (method)\n    {\n        case \'ACR\':\n            post("Importing test methodology: ", method, "\\n");\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("patch", "script sendbox bpatcherMethod replace method_ACR");\n            break;\n\n        case \'MS\':\n            post("Importing test methodology: ", method, "\\n");\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("patch", "script sendbox bpatcherMethod replace method_MS");\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("setTest", numberOfAudioRenderingVSTs);\n            break;\n\n        case \'PC\':\n            post("Importing test methodology: ", method, "\\n");\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("patch", "script sendbox bpatcherMethod replace method_PC");\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("setTest",numberOfAudioRenderingVSTs);\n            break;\n\n        case \'MUSHRA\':\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("patch", "script sendbox bpatcherMethod replace method_MUSHRA");\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("setTest", numberOfAudioRenderingVSTs);         \n            break;\n\n        case \'EBA\':\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("patch", "script sendbox bpatcherMethod replace method_EBA");\n            SEND_MODULE_METHOD_QUESTIONNAIRE.message("setTest", numberOfAudioRenderingVSTs);\n            break;\n\n        default:\n            error("Error: methodType : ", method, " is not recognized in .json file.", "\\n");\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"module_methodquestionnairecontainermaxpat",children:"module_MethodQuestionnaireContainer.maxpat"}),"\n",(0,i.jsxs)(n.p,{children:["The max patch below shows how messages sent into the ",(0,i.jsx)(n.code,{children:"thispatcher"})," object can load new max patches in real time.\nBoth the method container (left) and the questionnaire container (right) start of with a default empty max patch. From the functions above (",(0,i.jsx)(n.code,{children:"setQuestionnaire()"})," and ",(0,i.jsx)(n.code,{children:"setTestMethod()"}),") the correct max patches will be loaded into each of these modules respectively."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"my-qexe-project\n\u2514\u2500 qexe_controller\n   \u2514\u2500 src\n      \u2514\u2500 patchers\n         \u251c\u2500\u2500 ...\n         \u251c\u2500\u2500 module_MethodQuestionnaireContainer.maxpat\n         \u2514\u2500\u2500 ...\n"})}),"\n",(0,i.jsx)(n.h4,{id:"patch-mode",children:"Patch-mode"}),"\n",(0,i.jsx)(o.A,{imageUrl:"../../img/screenshots/method_container.png",alt:"method container",width:"50%"}),"\n",(0,i.jsx)(n.h4,{id:"presentation-mode-with-acr-method-and-ssq-questionnaire",children:"Presentation-mode (with ACR method and SSQ questionnaire)"}),"\n",(0,i.jsx)(o.A,{imageUrl:"../../img/screenshots/MaxMSP_3.png",alt:"method container",width:"80%"}),"\n",(0,i.jsx)(n.h3,{id:"calculateparadigm",children:"calculateParadigm()"}),"\n",(0,i.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Takes the ",(0,i.jsx)(n.code,{children:"methodType"})," and searches for the the correct entry."]}),"\n",(0,i.jsx)(n.li,{children:"Methods from code imports are then used to calculate a set of items."}),"\n",(0,i.jsxs)(n.li,{children:["The calculated set of test items is then saved into a dict called ",(0,i.jsx)(n.code,{children:"objtmptxt"})," which is used throughout the test to access the correct variables."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"customization-options-2",children:"Customization options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To include your own test method, you must also include a function to caluclate the correct number of test items. As an example, the method ",(0,i.jsx)(n.code,{children:"ACRParadgm"})," is contained within the ",(0,i.jsx)(n.code,{children:"_method_ACR_calc"})," object. This is imported at the top of the ",(0,i.jsx)(n.code,{children:"testmanager.js"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"... show code ..."})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="/src/code/testmanager.js"',children:'function calculateParadigm() {\n    var objtmptxt = "";\n    var thisTest = new Dict("thisTest");     // Dictionary for the test.\n\n    switch(_objtxt.testSettings.methodType)  // Create the paradigm.\n    {\n        case \'ACR\':\n            thisTest = _method_ACR_calc.ACRParadigm(_objtxt);\n            break;\n\n        case \'MS\':\n            thisTest = _method_EBA_calc.EBAParadigm(_objtxt);\n            break;\n\n        case \'PC\':\n            thisTest = _method_PC_calc.PCParadigm(_objtxt);\n            break;\n\n        case \'MUSHRA\':\n            thisTest = _method_MUSHRA_calc.MUSHRAParadigm(_objtxt);\n            break;\n\n        case \'EBA\':\n            thisTest = _method_EBA_calc.EBAParadigm(_objtxt);\n            break;\n\n        default :\n            error("Test method does not currently exist. Cannot construct test items. \'\\n\' ");\n            break;\n    }\n\n    outlet(outlet_JSON, "paradigm", \'clear\');\n    outlet(outlet_JSON, "paradigm", "dictionary", thisTest.name);\n\n    thisTest.export_json("jsontmp.json");                   // Export the paradigm to a json file.\n    var objtmptxt = utilsmodule.loadFile("jsontmp.json");   // Reimport the paradigm json.\n\n    try {\n        _objParadigm = JSON.parse(objtmptxt);               // Parse into a javascript object.\n    } catch (e) {\n        post("Error parsing jsontmp.json");\n        return false;\n    }\n\n    SEND_PANEL_CURRENT_ITEM_SIMPLE.message("numberOfItems", \n                                            _objParadigm.tmpItem.length);\n\n    SEND_MODULE_RESULTS_WRITER.message("SetInfoForResults", \n                                        _objtxt.testSettings.methodType, \n                                        _objtxt.testSettings.modalityRatio, \n                                        _objParadigm.tmpItem.length);\n\n    SENDTO_PANEL_SCENE_INFORMATION.message("DisplayNumberOfItems",\n                                         _objParadigm.tmpItem.length);\n\n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"setoscmanager",children:"setOSCManager()"}),"\n",(0,i.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sends the OSC information to the OSC manager regarding the ip address and port numbers."}),"\n",(0,i.jsx)(n.li,{children:"Sends the test information to the OSC manager such that the variables can be quickly sent to the conntection unity agent upon request."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"customization-options-3",children:"Customization options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you wish to send more variables to the qexe unity agent, you can add them here and augment the ",(0,i.jsx)(n.code,{children:"set_paradigm_info()"})," function in the ",(0,i.jsx)(n.code,{children:"module_osc_handler.js"})," script."]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"... show code ..."})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="/src/code/testmanager.js"',children:'function SetOSCManager() {\n    SEND_MODULE_OSC_MANAGER.message("setOSC", \n                                    _objtxt.testSettings.ip,                        // set the ip address \n                                    _objtxt.testSettings.udpPortOut,                // set the outgoing OSC port number\n                                    _objtxt.testSettings.udpPortIn);                // set the incoming OSC port number\n\n    SEND_MODULE_OSC_MANAGER.message("SetLocalVars", \n                                    "set_paradigm_info", \n                                    _objtxt.testSettings.methodType,                // set method.\n                                    numberOfAudioRenderingVSTs,                     // set number of VSTs loaded.\n                                    _objtxt.testSettings.questionnaireType,         // set type of questionnaire.\n                                    _objtxt.testSettings.questionnaireIntegration); // set the intrgation mode of the questionnaire.                   \n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"setaudioconditionsargs",children:"SetaudioConditions(args)"}),"\n",(0,i.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Takes the ",(0,i.jsx)(n.code,{children:"audioRendering"})," key and values entires from the JSON configuration file and loads the relevant VSTs."]}),"\n",(0,i.jsx)(n.li,{children:"Initially creates the interface buttons needed to be able to open the VSTs GUIs."}),"\n",(0,i.jsx)(n.li,{children:"To load the actual audio rendering VSTs, a loop will itterate through the number of VSTs, and provide the path for a VST maxMSP object to be loaded, and plugged. Information in this loop is then collected and finally sent to the results writer so that all results files have the required test data."}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"... see code ..."})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="/src/code/testmanager.js"',children:'function SetaudioConditions(AudioRendering) {\n    if (AudioRendering.active === 1){\n\n        SENDTO_PANEL_AUDIO_INFORMATION.message("SetButtons", \n                                                AudioRendering.renderingPipeline, \n                                                AudioRendering.audioVSTConditions.length);\n\n        var ConditionIDArray = [];      // Array of dll id\'s for results.\n        var ConditionPathArray = [];    // Array of paths/to/dlls for results.\n        var HRTFInfoArray = [];         // HRTF info for the results.\n        var ParameterMap = [];          // Parameter maps used for the conversion of coordinate systems for results. \n        vstindex = 0;                   // Int for connecting the VST outlets.\n\n        for(i=0; i<AudioRendering.audioVSTConditions.length; i++){\n\n            // Set the poly~ VST target (needs to be done in separate message)\n            SENDTO_PANEL_AUDIO_INFORMATION.message("VSTContainer", \n                                                    AudioRendering.renderingPipeline, \n                                                    "target", (i+1));\n\n            // Load the VST to the correct poly~ VST object.                                         \n            SENDTO_PANEL_AUDIO_INFORMATION.message("VSTContainer", \n                                                    AudioRendering.renderingPipeline, \n                                                    "load", \n                                                    AudioRendering.pathToVSTs + "/" + AudioRendering.audioVSTConditions[i].vst, \n                                                    AudioRendering.pathToVSTs + "/" + AudioRendering.audioVSTConditions[i].vstParameterMap, \n                                                    vstindex);\n            vstindex = vstindex + 2;\n\n            // Push information to ConditionIDArray for the results file.  \n            ConditionIDArray.push(AudioRendering.audioVSTConditions[i].conditionID);\n            ConditionPathArray.push(AudioRendering.audioVSTConditions[i].vst);\n            HRTFInfoArray.push(AudioRendering.audioVSTConditions[i].hrtf)\n            ParameterMap.push(AudioRendering.audioVSTConditions[i].vstParameterMap ? AudioRendering.audioVSTConditions[i].vstParameterMap : "null");\n        }\n        SEND_MODULE_RESULTS_WRITER.message("SetConditionID", ConditionIDArray);\n        SEND_MODULE_RESULTS_WRITER.message("SetConditionPath", ConditionPathArray);\n        SEND_MODULE_RESULTS_WRITER.message("SetConditionHRTF", HRTFInfoArray);\n        SEND_MODULE_RESULTS_WRITER.message("SetConditionParameterMap", ParameterMap);\n    }\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"module_osc_handlerjs",children:"module_osc_handler.js"}),"\n",(0,i.jsx)(n.h4,{id:"location-1",children:"Location"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"my-qexe-project\n\u2514\u2500 qexe_controller\n   \u2514\u2500 src\n      \u2514\u2500 code\n         \u251c\u2500\u2500 ...\n         \u251c\u2500\u2500 module_osc_handler.js\n         \u2514\u2500\u2500 ...\n"})}),"\n",(0,i.jsx)(n.h3,{id:"setlocalvarsargs",children:"SetLocalVars(...args)"}),"\n",(0,i.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Function called from the ",(0,i.jsx)(n.code,{children:"testmanager.js"})," ",(0,i.jsx)(n.code,{children:"setOSCManager()"})," method to set local variables."]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"... see code ..."})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="/src/code/module_osc_handle.js"',children:"max.addHandler('SetLocalVars', (...args) => {\n    var msg = args[0]; // identify the message.\n    \n    switch (msg){\n        case 'set_paradigm_info':\n            method = args[1];                   // set method\n            numberOfConditions = args[2];       // set number of conditions\n            questionnaire = args[3];                // set questionnaire\n            questionnaireIntegration = args[4]; // set questionnaire integration type\n            break;    \n            \n        case 'set_subjects_results_directory':\n            subjectResultsDirectory = args[1];\n            break;\n        default:\n            max.post('/control/testmanager has no handler for value', ...args);\n            break;\n    }\n});\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"testmanagerargs",children:"TestManager(...args)"}),"\n",(0,i.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Handles all incoming calls from the unity to to either get information from the ",(0,i.jsx)(n.code,{children:"testmanager.js"}),", or respond directly with local variables. The first argument in the ",(0,i.jsx)(n.code,{children:"max.output()"})," method contains either the string ",(0,i.jsx)(n.code,{children:'"testmanager"'})," or ",(0,i.jsx)(n.code,{children:'"toclient"'})," which routes all subsequent data to the ",(0,i.jsx)(n.code,{children:"testmanager.js"})," or outgoing OSC port."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"customization-options-4",children:"Customization options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can add more cases here to handle new incoming OSC messages from Unity. The format of the incoming call should be ",(0,i.jsx)(n.code,{children:'"TestManager, msg, ... "'})]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"... see code ..."})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="/src/code/module_osc_handle.js"',children:"max.addHandler('TestManager', (...args) => {handle_TestManager(...args)});\n\nfunction handle_TestManager(...args){\n    var msg = args[0];\n\n    if(jsonLoaded===0){\n        max.post('WARNING: no json test loaded', jsonLoaded);\n        return;\n    }\n\n    switch (msg){\n        case 'get_next_item':\n            max.post('Unity requesting next item information');\n            max.outlet('testmanager', 'OSCCall', 'getitem');\n            break;\n        case 'set_next_item':\n            max.post('Unity setting next item');\n            max.outlet('testmanager', 'OSCCall', 'setitem');\n            break;\n        case 'client_is_active':\n            max.post('Client is active:', args[1], max.POST_LEVELS.WARN);\n            max.outlet('toclient', '/client/configuration/', 'json_loaded', 1);\n            break;\n        case 'get_paradigm_information':\n            max.post('Unity requesting method information');\n            handle_SendToUnity('give_paradigm_information');\n            break;\n        case 'get_results_directory':\n            max.outlet('testmanager', 'OSCCall', 'getdirectory');\n        default:\n            max.post('/control/testmanager has no handler for msg value');\n            break;\n    }\n}\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"sendtounityargs",children:"SendToUnity(...args)"}),"\n",(0,i.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Handles all incoming calls to send information to Unity. The first argument in the ",(0,i.jsx)(n.code,{children:"max.output()"})," method contains the string ",(0,i.jsx)(n.code,{children:'"toclient"'})," which routes all subsequent data to the outgoing OSC port."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"customization-options-5",children:"Customization options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you would like to send more information to Unity, you can add another case ",(0,i.jsx)(n.code,{children:"msg"})," here. The format of the incoming call should be ",(0,i.jsx)(n.code,{children:'"SendToUnity, msg, ... "'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"... see code ..."})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="/src/code/module_osc_handle.js"',children:"max.addHandler('TestManager', (...args) => {handle_TestManager(...args)});\n\nfunction handle_TestManager(...args){\n    var msg = args[0];\n\n    if(jsonLoaded===0){\n        max.post('WARNING: no json test loaded', jsonLoaded);\n        return;\n    }\n\n    switch (msg){\n        case 'get_next_item':\n            //max.post('Unity requesting next item information');\n            max.outlet('testmanager', 'OSCCall', 'getitem');\n            break;\n        case 'set_next_item':\n            max.post('Unity setting next item');\n            max.outlet('testmanager', 'OSCCall', 'setitem');\n            break;\n        case 'client_is_active':\n            max.post('Client is active:', args[1], max.POST_LEVELS.WARN);\n            max.outlet('toclient', '/client/configuration/', 'json_loaded', 1);\n            break;\n        case 'get_paradigm_information':\n            //max.post('Unity requesting method information');\n            handle_SendToUnity('give_paradigm_information');\n            break;\n        case 'get_results_directory':\n            max.outlet('testmanager', 'OSCCall', 'getdirectory');\n        default:\n            max.post('/control/testmanager has no handler for msg value');\n            break;\n    }\n}\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"module_oscmanagermaxpat",children:"module_OSCManager.maxpat"}),"\n",(0,i.jsxs)(n.p,{children:["The max patch below shows where the ",(0,i.jsx)(n.code,{children:"module_osc_handler.js"})," code is used.\nIncoming OSC messages that do not have a specific address in the max ",(0,i.jsx)(n.code,{children:"route"})," object are fed into ",(0,i.jsx)(n.code,{children:"module_osc_handler.js"}),".\nOutgoing messages are either routed to the ",(0,i.jsx)(n.code,{children:"testmanager.js"})," script, or to the outgoing UDP port."]}),"\n",(0,i.jsx)(n.h4,{id:"location-2",children:"Location"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"my-qexe-project\n\u2514\u2500 qexe_controller\n   \u2514\u2500 src\n      \u2514\u2500 patchers\n         \u251c\u2500\u2500 ...\n         \u251c\u2500\u2500 module_OSCManager.maxpat\n         \u2514\u2500\u2500 ...\n"})}),"\n",(0,i.jsx)(o.A,{imageUrl:"../../img/screenshots/module_OSCManager.png",alt:"method container",width:"90%"})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8973:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);const i="centerImg_af_H";var s=t(4848);const o=function(e){let{imageUrl:n,alt:t,width:o}=e;const a={width:o||"100%",justifyContent:"center"};return(0,s.jsx)("section",{className:i,children:(0,s.jsx)("img",{src:n,alt:t,style:a})})}}}]);