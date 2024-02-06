---
sidebar_position: 1
---

# Install

Flare is distributed using a VPM package. It is recommended to install it using the VCC.

## Dependencies

Flare requires Unity 2022.3.6f1 and the VRChat Avatars SDK version 3.5.0 or later. If keep your SDK and Unity version
up to date, you should be fine.

Flare depends on the [Non-Destructive Modular Framework](https://github.com/bdunderscore/ndmf) by bd_, and my animation 
building library [Sucrose](https://github.com/Auros/Sucrose). The installation steps below will explain how to install
`ndmf` properly.

## VRChat Creator Companion

The VRChat Creator Companion (VCC) can be downloaded directly [here](https://vrchat.com/download/vcc). You can also
learn more about the Creator Companion within the VRChat [documentation](https://vcc.docs.vrchat.com/).

1. Add bd_'s VPM scope using [this link](vcc://vpm/addRepo?url=https://vpm.nadena.dev/vpm.json)
to ensure `ndmf` can be installed.
2. Add my VPM scope using [this link](vcc://vpm/addRepo?url=https://vpm.auros.nexus/index.json).
3. Navigate to the project in the VCC and click `Manage Project`.
4. Find `Flare` in the package list and add it.

:::warning
If you do not see Flare in the package list (or the version you want), enable `Show Pre-Release Packages` in
Settings -> Packages within the VRChat Creator Companion.
:::