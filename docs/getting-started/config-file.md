---
sidebar_position: 2
custom_edit_url: null 
description: Explore the config file...
---

# The config File

#### What's it for?

As the name suggests, the config file is used to configure the QExE Controller. By loading in this file, the QExE Controller will automatically load in the correct material required, calculate the test items, and communicate with the Unity Agent throughout the test to send information. 

#### How do I use it?

The QExE config file can be loaded into the MaxMSP Controller, buy clicking "Load File", and navigating to your config.json Ffle.

## Breakdown

The following entires fall under the `testSettings` nest of the json File.

### OSC Connection

```JSON
    "udpPortIn" : 8002,
    "udpPortOut" : 8000,
    "ip" : "127.0.0.1",
```

- We can set the host UDP information via the following settings. An `ip` of 127.0.0.1 will be a local connection on the same PC.

:::info

Technically, any Agent can be connected to the QExE Controller. Therefore, the UDP settings in the Unity Agent must be entered separately. The default UDP settings in the Unity Agent is configured to send and receive messages from the above Controller settings.

:::

### Test Parameters

The following entries will largly dictate how the test items will be calculated... 

```JSON
    "methodType" : "ACR",
    "questionnaireType" : "NASA-TLX",
    "questionnaireIntegration" : "Lace",
    "modalityRatio" : "A",
    "itemPresentationOder" : "Fixed",
```

- The [`methodType`](../features/methods) is the fundamental base of creating your test. This information loads the correct method code, user interface, and will be used to create the number of unique test items.
- The [`questionnaireType`](../features/questionnaires) entry can be used to include an optional questionnaire. 
- The `questionnaireIntegration` can be used to specify how the questionnaire is added to the test.

:::info Important!

The `methodType` and `questionnaireType` string entries will be sent over to the Unity Agent. These string entries are used to search for the corresponding user interface and code in the Unity project.

:::

- The `modalityRatio` entry can be used to define a ratio between audio renderers vs. visual content that should be used to calculate the test items, depending on the method employed. 
- The `itemPresentationOrder` entry can be used to define if the items should be presented in a `Fixed` or `Random` order.

### Content Directory

```JSON
    "pathToAudioVideoScenesContent" : "D:/user/myProject/theContent",
```

-  The `pathToAudioVideoScenesContent` entry is used to set a base URL for all of the content used in the [Scene](#scenes) entries. All audio and video files that are specified in the Scene entries will be relative to this folder location.


### Audio Rendering

The `audioRendering` entries dictate if, and how, any audio rendering should be done locally inside the Controller (MaxMSP). 

While the QExE tool does not have native audio rendering, it does allow loading in up to 6 VST plug-ins capable of real-time audio rendering. To load your VSTs, the following entries are used...

```JSON
"audioRendering" : {
    "active" : 1,
    "renderingPipeline" : "Objects",
    "pathToVSTs" : "D:/work/_QoEVAVE/gitlab_fau/QExE/MaxHost/localtmp",
    "audioVSTConditions" : [
        {
            "conditionID" : "GBRv2.0.2",
            "vst" : "GBR.dll",
            "hrtf" : "D2_48K_24bit_256tap_FIR_SOFA.sofa",
            "vstParameterMap" : "GBRmapper.js"
        }
    ]
}
```
- The `active` entry sets of audio rendering should be performed or not. 
- The `renderingPipeline` entry specifies which type of audio workflow should be used. This will effect how the audio is loaded into the MaxMSP buffers, and how these buffers are fed to the VSTs.
    - `renderingPipeline : Objects` can take up to 36 mono files for object-based audio rendering.
    - `renderingPipeline : Multichannel` will expect a single multichannel audio file, used for channel or Ambisonics audio renderring (depending on the VST).
- The `pathToVSTs` entry is used to specify a folder containing your audio VST plug-ins on your local machine. 
- The `audioVSTConditions` array is a nest of audio renderers that can be used to render your audio stimuli. These `audioVSTConditions` are analogous to conditions under test in traditional audio evaluation. For example, providing three `audioVSTConditions` in this nest will mean that three audio conditions will be presented in parallel when using methods [multiple stimulus comparison] or [elimination-by-aspects]. If [absolue category rating] method is used, three unique test items will be construstructed per stimuli to reflect the three audio renderers used.
    - The `conditionID` entry is a string of your choosing the help identify this condition. The reason we do not just take the .dll name from the following `vst` name is that the same VST may be employed with different settings / or HRTFs. 
    - The `vst` entry is the name of the VST .dll to load.
    - The `HRTF` is the name of the HRTF file you might wish to use inside your VST.
    - The `vstParameterMap` is the name of the mapping file used to translate incoming real-time coordinate information from Unity, to the coordinate system of the respective VST.

### Scenes{#scenes}

Often referred to as programme material, or stimuli, this is the audiovisual content that will be presented to the subject. 
Visit the [Evaluation Scenes](./eval-scenes) page on a breakdown of the JSON entries used in a Scene.

```JSON
"Scenes" : [
    {
        "stimuli_ID" : "InteractionDemo_scene_1",
        "unityScene_ID" : "_interactionDemo",
        "visualStimuliType" : "CGI",
        "dimensions" : [ 30.00, 8.00, 30.0 ],
        "multichannelAudio" : {
            "multichannelAudioFile" : null
        },
        "objectAudio" : {
            "objectAudioFolder" : "audio/_bongos/edited",
            "objectAudioRouting" : [ ] // array of items
        }
    },
    {
        ....
    }
]
```

## Complete Example

Here's an example config file you can use with the InteractionDemo provided in the Unity agent.

```JSON
{
    "testSettings" : {
        "udpPortIn" : 8002,
        "udpPortOut" : 8000,
        "ip" : "127.0.0.1",
        "methodType" : "ACR",
        "questionnaireType" : "NASA-TLX",
        "questionnaireIntegration" : "Lace",
        "modalityRatio" : "A",
        "itemPresentationOder" : "Fixed",
        "pathToAudioVideoScenesContent" : "D:/work/_QoEVAVE/gitlab_fau/QExE/Content",
        "audioRendering" : {
            "active" : 1,
            "renderingPipeline" : "Objects",
            "pathToVSTs" : "D:/work/_QoEVAVE/gitlab_fau/QExE/MaxHost/localtmp",
            "audioVSTConditions" : [
                {
                    "conditionID" : "GBRv2.0.2",
                    "vst" : "GBR.dll",
                    "hrtf" : "D2_48K_24bit_256tap_FIR_SOFA.sofa",
                    "vstParameterMap" : "GBRmapper.js"
                }
            ]
        }
    },
    "Scenes" : [
        {
            "stimuli_ID" : "InteractionDemo_scene_1",
            "unityScene_ID" : "_interactionDemo",
            "visualStimuliType" : "CGI",
            "dimensions" : [ 30.00, 8.00, 30.0 ],
            "multichannelAudio" : {
                "multichannelAudioFile" : null
            },
            "objectAudio" : {
                "objectAudioFolder" : "audio/_bongos/edited",
                "objectAudioRouting" : [
                    {
                        "pathToFile" : "1_bongos_L.wav",
                        "inputChannel" : 0,
                        "autoplay" : 1
                    },
                    {
                        "pathToFile" : "2_bongos_R.wav",
                        "inputChannel" : 1,
                        "autoplay" : 1
                    },
                    {
                        "pathToFile" : "3_trainsound_whistle.wav",
                        "inputChannel" : 2,
                        "autoplay" : 1
                    },
                    {
                        "pathToFile" : "4_stream.wav",
                        "inputChannel" : 3,
                        "autoplay" : 1
                    },
                    {
                        "pathToFile" : "5_birdsong_1.wav",
                        "inputChannel" : 4,
                        "autoplay" : 1
                    },
                    {
                        "pathToFile" : "5_brick_2.wav",
                        "inputChannel" : 5,
                        "autoplay" : 0
                    },
                    {
                        "pathToFile" : "6_metal_2.wav",
                        "inputChannel" : 5,
                        "autoplay" : 0
                    }
                ]
            }
        }
    ]
}
```