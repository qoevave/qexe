---
sidebar_position: 1
custom_edit_url: null 
---

# Home

## Discover...

[**What**](/docs/intro#discover-what-id) the QExE tool is, [**why**](docs/intro#discover-why-id) it's here, and [**who**](/docs/intro#discover-who-id) it's for...

### What?{#discover-what-id}

The quality of experiece of evaluation (QExE) tool is a framework for streamlining subjective experiments for virtual reality, focusing on **audiovisual quality** and **quality of experience** (QoE) methods in interactive virtual environments. 

Using MaxMSP and Unity, the QExE tool can be used to automate subjective experiments using several quality evaluation methods and questionnaires, employ a range of audio and visual stimuli possibilities including 360 video, CGI graphics, object-based audio, and Ambisonics, and track subjective exploration behavior and VR interactions for further analysis. 

For more information on what the QExE tool is and what it offers, take a look at the following recourses:
- 📋 The [feature list](/features/features.mdx) for an overview, or specific information on quality evaluation [methods](./features/methods) or [questionnaires](./features/questionnaires). 
- 📚 The [terminology and concepts](./getting-started/terminology) page, for a description of important aspects within the tool.
- 🏡 The [evaluations scene](./getting-started/eval-scenes) page, for an overview of what combinations of audiovisual content can be tested.
- 🛠️ The [architecture](./qexe-architecture/overview) documentation to learn why the tool is built the way it is and how it works

### Why?{#discover-why-id}

Virtual reality brings together multiple disciplines, including audio and visual rendering, human computer interaction, multi-modal perception, and cognitive sciences, for example. Designing and configuring virtual realty experiments for subjective evaluations under these domains can require considerable overhead. 

The QExE tool aims to alleviate a considerable portion of the experiment setup by providing a framework to consolidate test automation, user interfaces, VR mechanics, and data collection, under one roof. The [config file](./getting-started/config-file) will take care of creating all the test items, importing your chosen method, questionnaire, recording tracking data, etc.

With the QExE tool you're also not fixed into a rigid test design. For users wanting to adapt the current implementation, you can always go under the hood to add new test modules and import your own test method, capture and track different behavioral data, or add in different questionnaires.

### Who?{#discover-who-id}

The QExE tool is for researchers and developers conducing subjective experiments in VR. If you're famliar with perceptual quality experiments or sensory sciences, many of the discussed requirements will sound familiar. Experience and terminology with Unity will also be an advantage for researchers looking to adapt the QExE tool to their needs. 

A good place to start is to check the following "I want to" list. If you see yourself in one of these, the QExE tool can help you out. 

Hi 👋🏼 I want to ... 

- ✅ ... evaluate audio, visual, or audiovisual quality of one or more VR scene. Subsitute *quality*, for *plausibility*, *immersion*, or *presence* and you're still on the right track 👍🏽 
- ✅ ... run some pre-tests but not sure about the method, and would like to try some different ones out. 
- ✅ ... give subjects questionnaires either per item, or post-test, in VR without them having to take of the VR headset. 
- ✅ ... collect multi-modal data of subjects interactions and behaviors for further analysis.
- ✅ ... test different spatial audio rendering VSTs with the same real-time data. 
- ✅ ... conduct research on high-order cognitive contructs in VR such as cognitive load. 
- ✅ ... compare a 360 video scene vs. CGI scene. 

For more information, see the QExE [feature tiers](./features/features) for more information. 

## How Can I Download?

:::tip 

Visit the [QExE setup page](./downloading) for information on how to download. 

:::

## QExE Tool Development

### 🏗️ Continued Support

The QExE tool release is a step towards building a larger framework for evaluating multimedia quality and quality of experience in virtual reality. The current implememtation is a consequence of requirements from previous audiovisual studies in virtual reality. For the future, we aim to build on current the feature set with further methods, questionnaires, interactive implementation, and core 'quality-of-life' functionality.

### 📨 Invitation to Contribute

If you choose to employ the QExE tool in your studies and have adapted the mechanics, or provided new functionality you feel may benifit others, ***please get in touch***. In our goal to continuously update the tool to the benifit of the research community. The best way to acheive this, is to have direct feedback from the community itself. 


## Publication


```
@article{robotham2024,
title = {title},
author = {Authors},
year = {year},
pages={pages}
}
```

## SDKs / Packages

List of notable packages and SDKs used inside the Unity scenes. 

- [**<u>HDRP</u>**](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@12.1/manual/index.html) v12.1.14 - Registry @ *com.unity.render-pipelines.high-definition*

- [**<u>Input System</u>**](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/manual/index.html) v1.7.0 - Registry @ *com.unity.inputsystem*

- XR Plugins
    - [**<u>Oculus</u>**](https://docs.unity3d.com/Packages/com.unity.xr.oculus@3.3/manual/index.html) v3.3.0 - Registry @ *com.unity.xr.oculus*
    - [**<u>OpenXR</u>**](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.9/manual/index.html) v1.9.1 - Registry @ *com.unity.xr.openxr*
    - [**<u>XR Interaction Toolkit</u>**](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.5/manual/index.html) v2.5.2 Registry @ *com.unity.xr.interaction.toolkit*
    - [**<u>XR Plugin Management</u>**](https://docs.unity3d.com/Packages/com.unity.xr.management@4.4/manual/index.html) v4.4.0 Registry @ *com.unity.xr.management*

- [**<u>extOSC</u>**](https://github.com/Iam1337/extOSC) v1.2 - git @ *iam1337/extOSC*


## License Information

### QExE License

:::info CC BY-NC-SA 4.0 License

```qexe.assets``` 

- Assets authored by the FAU for the QExE tool is Licensed under the [CC BY-NC-SA 4.0] License.

:::

:::info MIT License

```qexe.code```

- Code authored by the FAU for the QExE tool is Licensed under the [MIT] License. 

:::

### Third Party Notices

List of Third Party Notices for the SDKs / Packages used in the QExE tool.

:::note [Unity Companion License](https://unity.com/legal/licenses/unity-companion-license)

Governing packages:

- `URP` 
- `Input System`
- `XR Plugin Management`
- `XR Interaction Toolkit` (+ Third Party Notice Apache 2.0 - Google Inc.)
- `OpenXR Plugin` (+ Third Party Notice Apahce 2.0 - Facebook Technologies, LLC and its affiliates.)
- `Oculus XR Plugin` (+ Third Party Notice Oculus SDK License Agreement.)

> Unity Technologies ApS (“Unity”) grants to you a worldwide, non-exclusive, no-charge, and royalty-free copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, and distribute the work of authorship that accompanies this License (“Work”) subject to the following terms and conditions:

<details>
<summary>
T&Cs 
</summary>

1. Unity Companion Use. Exercise of the license granted herein is permitted as long as it is in connection with the authoring and/or distribution of applications, software, or other content under a valid Unity content authoring and rendering engine software license (“Engine License”). That means, for example, as long as you authored content using the Work under an Engine License, you may distribute the Work in connection with that content as you see fit under this License. No other exercise of the license granted herein is permitted, and in no event may the Work be used for competitive analysis or to develop a competing product or service.

2. No Modification of Engine License. Neither this License nor any exercise of the license granted herein modifies the Engine License in any way.

3. Ownership; Derivative Works.

    3.1. You own your content. In this License, “derivative works” means derivatives of the Work itself--works derived only from the Work by you under this License (for example, modifying the code of the Work itself to improve its efficacy); “derivative works” of the Work do not include, for example, games, apps, or content that you create with the Work. You keep all right, title, and interest in your own content.

    3.2. Unity owns its content. While you keep all right, title, and interest to your own content per the above, as between Unity and you, Unity will own all right, title, and interest to all intellectual property rights (including patent, trademark, and copyright) in the Work and derivative works of the Work, and you hereby assign and agree to assign all such rights in those derivative works to Unity. Should assignment be invalid for any reason, you grant to Unity an irrevocable, perpetual, worldwide, non-exclusive, no-charge, and royalty-free license (with the right to grant sublicenses) under those intellectual property rights to those derivative works. You also agree to waive or refrain from asserting any author’s right, moral rights, or like rights to the extent necessary to permit exploitation as contemplated under this License.

    3.3. Your right to use derivative works. You will always have the right to use derivative works of the Work you create, consonant with this License.

4. Trademarks. You are not granted any right or license under this License to use any trademarks, service marks, trade names, products names, or branding of Unity or its affiliates (“Trademarks”). Descriptive uses of Trademarks are permitted; see, for example, Unity’s Trademark Guidelines athttps://unity.com/legal/branding_trademarks.

5. Notices & Third-Party Rights. This License, including the copyright notice associated with the Work, must be provided in all substantial portions of the Work and derivative works thereof (or, if that is impracticable, in any other location where such notices are customarily placed). Further, if the Work is accompanied by a Unity “third-party notices” or similar file, you acknowledge and agree that software or content identified in that file is governed by those separate license terms.

6. DISCLAIMER, LIMITATION OF LIABILITY. THE Work AND ANY DERIVATIVE WORKS THEREOF IS PROVIDED ON AN "AS IS" BASIS, AND IS PROVIDED WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND/OR NON-INFRINGEMENT. IN NO EVENT SHALL ANY COPYRIGHT HOLDER OR AUTHOR BE LIABLE FOR ANY CLAIM, DAMAGES (WHETHER DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL, INCLUDING PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE, DATA, OR PROFITS, AND BUSINESS INTERRUPTION), OR OTHER LIABILITY WHATSOEVER, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM OR OUT OF, OR IN CONNECTION WITH, THE Work OR ANY DERIVATIVE WORKS THEREOF OR THE USE OF OR OTHER DEALINGS IN SAME, EVEN WHERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

7. USE IS ACCEPTANCE and License Versions. Your access to and use of the Work constitutes your acceptance of this License and its terms and conditions. This License may be modified or updated; upon any such modification or update, you will comply with the terms of the updated License for any use of any of the Work under the updated License.

8. Use in Compliance with Law and Termination. Your exercise of the license granted herein will at all times be in compliance with applicable law and will not infringe any proprietary rights (including intellectual property rights); this License will terminate immediately (i) on any breach by you of this License; and (ii) if you commence any form of patent litigation, including a cross-claim or counterclaim, against anyone wherein you allege that the Work constitutes direct or secondary/indirect patent infringement.

9. Severability. If any provision of this License is held to be unenforceable or invalid, that provision will be enforced to the maximum extent possible and the other provisions will remain in full force and effect.

10. Governing Law and Venue. This License is governed by and construed in accordance with the laws of Denmark, except for its conflict of laws rules; the United Nations Convention on Contracts for the International Sale of Goods will not apply. If you reside (or your principal place of business is) within the United States, you and Unity agree to submit to the personal and exclusive jurisdiction of and venue in the state and federal courts located in San Francisco County, California concerning any dispute arising out of this License (“Dispute”). If you reside (or your principal place of business is) outside the United States, you and Unity agree to submit to the personal and exclusive jurisdiction of and venue in the courts located in Copenhagen, Denmark concerning any Dispute.

</details>

:::
    
:::note [Apache 2.0](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.5/license/Third%20Party%20Notices.html)

Pertaining to packages:

- `XR Interaction Toolkit` regarding components:
    - `Gesture code from AR Core Unity ObjectManipulation Example`. Copyright  © 2017 Google Inc. 

- `OpenXR Plugin` regarding components:

    - `OpenXR-SDK-Source`. Copyright © Facebook Technologies, LLC and its affiliates

:::


:::note [MIT License](https://github.com/Iam1337/extOSC/blob/master/LICENSE)

Pertaining to packages:
- `extOSC` Copyright © 2018-2021 Vladimir Sigalkin

:::

