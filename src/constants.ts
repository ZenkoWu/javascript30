import { TDrumKitKeys } from "./types";
import clap from './components/DrumKit/sounds/clap.wav'
import hihat from './components/DrumKit/sounds/hihat.wav'
import kick from './components/DrumKit/sounds/kick.wav'
import openhat from './components/DrumKit/sounds/openhat.wav'
import boom from './components/DrumKit/sounds/boom.wav'
import ride from './components/DrumKit/sounds/ride.wav'
import snare from './components/DrumKit/sounds/snare.wav'
import tom from './components/DrumKit/sounds/tom.wav'
import tink from './components/DrumKit/sounds/tink.wav'

export const drumKitKeys: TDrumKitKeys = [
    {
        key: 'A',
        name: 'CLAP',
        dataKey: 65,
        src: clap
    },
    {
        key: 'S',
        name: 'HIHAT',
        dataKey: 83,
        src: hihat
    },
    {
        key: 'D',
        name: 'KICK',
        dataKey: 68,
        src: kick
    },
    {
        key: 'F',
        name: 'OPENHAT',
        dataKey: 70,
        src: openhat
    },
    {
        key: 'G',
        name: 'BOOM',
        dataKey: 71,
        src: boom
    },
    {
        key: 'H',
        name: 'RIDE',
        dataKey: 72,
        src: ride
    },
    {
        key: 'J',
        name: 'SNARE',
        dataKey: 74,
        src: snare
    },
    {
        key: 'K',
        name: 'TOM',
        dataKey: 75,
        src: tom
    },
    {
        key: 'L',
        name: 'TINK',
        dataKey: 76,
        src: tink
    },
]