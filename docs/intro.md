---
sidebar_position: 1
custom_edit_url: null 
---

# Introduction

The **Quality and Experience Evaluation (QExE) tool** is a framework for streamlining subjective experiments in virtual reality, with a focus on audiovisual quality and quality of experience (QoE) evaluation in interactive VR environments.

Built with **Unity** and **MaxMSP**, QExE automates experiment administration — handling test item generation, stimulus presentation, participant interaction, and data logging from a single configuration file. It supports a range of audiovisual stimuli including 360° video, CGI scenes, object-based audio, and Ambisonics.


## What is QExE?

QExE integrates five quality evaluation methods and two validated questionnaires, supports multiple audio rendering pipelines (including 3-DoF and 6-DoF VSTs), and records participant pose and interaction data for behavioral analysis. For a complete overview of capabilities, see:

- The [feature tiers](./features/feature-tiers) for a structured summary of the tool's capabilities
- The [evaluation methods](./features/methods) and [questionnaires](./features/questionnaires) pages for details on supported instruments
- The [terminology and concepts](./terminology) page for definitions of key terms used throughout the documentation
- The [evaluation scenes](./getting-started/eval-scenes) page for an overview of supported audiovisual content combinations
- The [architecture documentation](./qexe-architecture/overview) for a description of how the tool is structured and why

## Why QExE?

Virtual reality brings together multiple disciplines — including audio and visual rendering, human-computer interaction, multimodal perception, and cognitive science. Designing and configuring subjective evaluations across these domains involves considerable setup overhead.

QExE consolidates test automation, VR user interfaces, interaction mechanics, and data collection under a single framework. The [configuration file](./getting-started/config-file) handles test item generation, method and questionnaire integration, and behavioral data recording automatically.

The tool is also designed for extensibility. Researchers can introduce custom evaluation methods, questionnaires, or behavioral data streams without modifying the core architecture.

## Who is QExE for?

QExE is intended for researchers and developers conducting subjective experiments in VR. Familiarity with perceptual quality evaluation or sensory science is assumed; some experience with Unity is an advantage for those wishing to extend the tool.

QExE is well-suited to studies that involve:

- Evaluating audio, visual, or audiovisual quality across one or more VR scenes — including related constructs such as plausibility, immersion, or presence
- Piloting experiments where the evaluation method has not yet been finalised
- Administering questionnaires entirely within VR, without requiring participants to remove the headset
- Collecting multimodal behavioral and interaction data for post-hoc analysis
- Comparing multiple spatial audio rendering VSTs against a shared set of stimuli
- Investigating higher-order cognitive constructs in VR, such as cognitive load
- Comparing 360° video and CGI scene conditions within the same experiment

## Downloading QExE

:::tip

Visit the [QExE setup page](./downloading) for download and installation instructions.

:::

## Development

### Continued Support

The current QExE release reflects requirements gathered from prior audiovisual studies in virtual reality. Future development will extend the feature set with additional evaluation methods, questionnaires, interactive implementations, and further quality-of-life improvements.

### Contributing

The most effective way to improve the tool is through direct feedback from the research community. Contributions are welcome — please get in touch if you are interested.

## Publication

The QExE tool is described in the following publication. If you use QExE in your research, please cite accordingly.

```bibtex
@article{robotham2026qexe,
  title     = {{QExE}: A Quality and Experience Evaluation Tool for Audiovisual {VR} Perception, Behavior, and Cognition Research},
  author    = {Robotham, Thomas M. and Rummukainen, Olli S. and Rebmann, Daniela and Raake, Alexander and Habets, Emanu\"{e}l A. P.},
  journal   = {Frontiers in Virtual Reality},
  volume    = {X},
  pages     = {XXX},
  year      = {2026},
  publisher = {Frontiers},
  doi       = {10.XXXX}
}
```

## SDKs and Packages

Key Unity packages and SDKs used in QExE:

| Package | Version | Registry |
| ------- | ------- | -------- |
| [HDRP](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@12.1/manual/index.html) | v12.1.14 | `com.unity.render-pipelines.high-definition` |
| [Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/manual/index.html) | v1.7.0 | `com.unity.inputsystem` |
| [Oculus XR Plugin](https://docs.unity3d.com/Packages/com.unity.xr.oculus@3.3/manual/index.html) | v3.3.0 | `com.unity.xr.oculus` |
| [OpenXR Plugin](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.9/manual/index.html) | v1.9.1 | `com.unity.xr.openxr` |
| [XR Interaction Toolkit](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.5/manual/index.html) | v2.5.2 | `com.unity.xr.interaction.toolkit` |
| [XR Plugin Management](https://docs.unity3d.com/Packages/com.unity.xr.management@4.4/manual/index.html) | v4.4.0 | `com.unity.xr.management` |
| [extOSC](https://github.com/Iam1337/extOSC) | v1.2 | git @ `iam1337/extOSC` |

## License

QExE assets and code are released under separate open-source licenses. See the [License](./license) page for full terms and third-party notices.

| Component | License |
| --------- | ------- |
| `qexe.assets` | [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) |
| `qexe.code` | [MIT](https://opensource.org/licenses/MIT) |

