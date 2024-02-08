---
sidebar_position: 7
---

# FAQ

## What is a non-destructive tool?
A non-destructive tool applies changes to your model only when you enter play mode or upload your avatar.

## What tools pair well with Flare?
Please check out [Modular Avatar](https://modular-avatar.nadena.dev/),
[Gesture Manager](https://github.com/BlackStartx/VRC-Gesture-Manager),
and [d4rk's Avatar Optimizer](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer).
I personally use both for my avatar setup, and they are both extremely
powerful and enable me to quickly iterate on avatars and make them optimized.

My workflow starts in Blender and I move over to Unity, trying to keep as many things as non-destructive as possible.

## I'm having an issue due to a bug! Where can I get help?
Please submit an [issue](https://github.com/Auros/Flare/issues) on GitHub and describe the problem you're having.

## Why the name Flare?
idk

## Why should I use Flare?
It's up to you! I made this tool for myself to meet my needs, but there are plenty of other tools that have different
features that you may want to use. Feel free to mix and match tools. The beauty of non-destructive workflows and
NDMF is that you can choose to customize your avatar pipeline.

If Flare doesn't meet the needs of your project, feel free to submit an
[issue on GitHub](https://github.com/Auros/Flare/issues), [contribute to the project](https://github.com/Auros/Flare),
or use another tool like [Vixen](https://docs.hai-vr.dev/docs/products/vixen) (the inspiration for flare), or
[VRCFury](https://vrcfury.com/). 

## How does Flare handle the animator?
Flare uses a Direct Blend Tree for normal toggles and value smoothing. It uses two layers to calculate frame time
(if needed), one more layer for handling tags (if they are used).

## How many animator layers does Flare generate?
Flare will generate a maximum of 5 layers TOTAL (and a minimum of 1). It will only generate the layers if they're needed
for the specific Flare setup.
* Primary Layer - One Direct Blend Tree handles non-interpolated control effects
* Smoothing Layer - When you have >= 1 controls using the `Duration` property, it will create three additional layers
    to support the logic needed to transition the values. This is one of them.
* Frame Time Layer - This is used in tandem with the Smoothing Layer to help calculate frame time to make controls
    independent of frame time.
* Frame Logic Layer - This is used in tandem with the Smoothing Layer, it handles actually calculating the deltaTime.
* Tag Driver Layer - Handles all the logic with the tag system.