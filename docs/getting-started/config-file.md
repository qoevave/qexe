---
sidebar_position: 3
custom_edit_url: null 
description: Reference documentation for the QExE JSON configuration file.
---

# The Configuration File

The QExE configuration file is a single `JSON` file that defines all aspects of a test. When loaded into the MaxMSP Controller via the **Load File** button, QExE reads this file to set up the OSC connection, load the appropriate method and questionnaire, calculate test items, and coordinate stimulus delivery with the Unity Agent throughout the test.

The sections below describe each entry under the `testSettings` key.

## OSC Connection

```JSON
    "udpPortIn" : 8002,
    "udpPortOut" : 8000,
    "ip" : "127.0.0.1",
```

Sets the UDP port and IP address used for OSC communication between the Controller and Agent. An `ip` of `127.0.0.1` configures a local connection on the same machine.

:::info

Any OSC-compatible agent can be connected to the QExE Controller. The UDP settings in the Unity Agent must be entered separately. The default values in the Unity Agent are configured to match the Controller defaults shown above.

:::

## Test Parameters

The following entries largely determine how the test is structured and how test items are calculated.

```JSON
    "methodType"              : "ACR",
    "questionnaireType"       : "NASA-TLX",
    "questionnaireIntegration": "Lace",
    "modalityRatio"           : "A",
    "itemPresentationOrder"    : "Fixed",
```

- `methodType` — specifies the evaluation method. This entry loads the correct method code and VR interface, and is used to calculate the number of unique test items.
- `questionnaireType` — optionally includes a questionnaire alongside the primary method.
- `questionnaireIntegration` — specifies how the questionnaire is inserted into the test ("Lace", "End", or "None").
- `modalityRatio` — defines whether audio ("A"), visual ("V"), or audiovisual ("AV") content drives test item calculation, depending on the method.
- `itemPresentationOrder` — sets the item presentation order to "Fixed" or "Random".

:::info

The methodType and questionnaireType strings are sent to the Unity Agent via OSC. They are used to locate and instantiate the corresponding VR interface and logic within the Unity project.

:::

## Content Directory

```JSON
    "pathToAudioVideoScenesContent" : "D:/user/myProject/theContent",
```

Sets the base path for all audio and video content referenced in the Scenes array. All file paths within Scenes entries are resolved relative to this directory.

## Audio Rendering

The `audioRendering` block controls whether and how audio rendering is performed locally within the MaxMSP Controller. QExE supports loading up to six VST plug-ins for real-time spatial audio rendering.

```JSON
"audioRendering" : {
    "active"            : 1,
    "renderingPipeline" : "Objects",
    "pathToVSTs"        : "D:/user/myProject/VSTs",
    "audioVSTConditions" : [
        {
            "conditionID"     : "myVST_v2.0.2_no_reverb",
            "vst"             : "MyVST.dll",
            "hrtf"            : "D2_48K_24bit_256tap_FIR_SOFA.sofa",
            "vstParameterMap" : "myVST_mapper.js"
        }
    ]
}
```
- `active` — set to 1 to enable audio rendering, 0 to disable.
- `renderingPipeline` — specifies the audio workflow:
    - "Objects" — accepts up to 36 mono files for object-based audio rendering.
    - "Multichannel" — expects a single multichannel file, for channel-based or Ambisonics rendering depending on the VST.
- `pathToVSTs` — path to the folder containing your VST plug-ins.
- `audioVSTConditions` — an array of audio rendering conditions. Each entry corresponds to a condition under test; providing three entries means three audio conditions will be presented in parallel (for multiple-stimulus methods) or as three separate test items per scene (for ACR).
- `conditionID` — a label to identify this condition. A separate identifier from the .dll name allows the same VST to be used with different settings or HRTFs as distinct conditions.
- `vst` — filename of the VST .dll to load.
- `hrtf` — filename of the HRTF file used by the VST, if applicable.
- `vstParameterMap` — filename of the mapping file used to translate real-time coordinate data from Unity into the coordinate system expected by the VST.

## Scenes{#scenes}

The `Scenes` array defines the audiovisual content presented to participants. Each entry represents a scene — analogous to programme material or stimuli in conventional evaluation. See the Evaluation Scenes page for a full breakdown of scene entry types and examples.

```JSON
"Scenes" : [
    {
        "stimuli_ID"       : "InteractionDemo_scene_1",
        "unityScene_ID"    : "_interactionDemo",
        "visualStimuliType": "CGI",
        "dimensions"       : [ 30.00, 8.00, 30.0 ],
        "multichannelAudio": {
            "multichannelAudioFile" : null
        },
        "objectAudio" : {
            "objectAudioFolder"  : "audio/_bongos/edited",
            "objectAudioRouting" : []
        }
    }
]
```

## Complete Example

A full configuration file for use with the _interactionDemo scene included in the QExE Unity Agent project.

```JSON
{
    "testSettings" : {
        "udpPortIn"               : 8002,
        "udpPortOut"              : 8000,
        "ip"                      : "127.0.0.1",
        "methodType"              : "ACR",
        "questionnaireType"       : "NASA-TLX",
        "questionnaireIntegration": "Lace",
        "modalityRatio"           : "A",
        "itemPresentationOder"    : "Fixed",
        "pathToAudioVideoScenesContent" : "D:/user/myProject/Content",
        "audioRendering" : {
            "active"            : 1,
            "renderingPipeline" : "Objects",
            "pathToVSTs"        : "D:/user/myProject/VSTs",
            "audioVSTConditions" : [
                {
                    "conditionID"     : "myVST_v2.0.2_no_reverb",
                    "vst"             : "MyVST.dll",
                    "hrtf"            : "D2_48K_24bit_256tap_FIR_SOFA.sofa",
                    "vstParameterMap" : "myVST_mapper.js"
                }
            ]
        }
    },
    "Scenes" : [
        {
            "stimuli_ID"        : "InteractionDemo_scene_1",
            "unityScene_ID"     : "_interactionDemo",
            "visualStimuliType" : "CGI",
            "dimensions"        : [ 30.00, 8.00, 30.0 ],
            "multichannelAudio" : {
                "multichannelAudioFile" : null
            },
            "objectAudio" : {
                "objectAudioFolder"  : "audio/_bongos/edited",
                "objectAudioRouting" : [
                    { "pathToFile" : "1_bongos_L.wav",           "inputChannel" : 0, "autoplay" : 1 },
                    { "pathToFile" : "2_bongos_R.wav",           "inputChannel" : 1, "autoplay" : 1 },
                    { "pathToFile" : "3_trainsound_whistle.wav", "inputChannel" : 2, "autoplay" : 1 },
                    { "pathToFile" : "4_stream.wav",             "inputChannel" : 3, "autoplay" : 1 },
                    { "pathToFile" : "5_birdsong_1.wav",         "inputChannel" : 4, "autoplay" : 1 },
                    { "pathToFile" : "5_brick_2.wav",            "inputChannel" : 5, "autoplay" : 0 },
                    { "pathToFile" : "6_metal_2.wav",            "inputChannel" : 5, "autoplay" : 0 }
                ]
            }
        }
    ]
}
```