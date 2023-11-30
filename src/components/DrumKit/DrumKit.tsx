import { useEffect, useState } from 'react'
import s from './DrumKit.module.css'
import clap from './sounds/clap.wav'
import hihat from './sounds/hihat.wav'
import kick from './sounds/kick.wav'
import openhat from './sounds/openhat.wav'
import boom from './sounds/boom.wav'
import ride from './sounds/ride.wav'
import snare from './sounds/snare.wav'
import tom from './sounds/tom.wav'
import tink from './sounds/tink.wav'

const drumKitKeys = [
    {
        key: 'A',
        name: 'CLAP',
        dataKey: 65
    },
    {
        key: 'S',
        name: 'HIHAT',
        dataKey: 83
    },
    {
        key: 'D',
        name: 'KICK',
        dataKey: 68
    },
    {
        key: 'F',
        name: 'OPENHAT',
        dataKey: 70
    },
    {
        key: 'G',
        name: 'BOOM',
        dataKey: 71
    },
    {
        key: 'H',
        name: 'RIDE',
        dataKey: 72
    },
    {
        key: 'J',
        name: 'SNARE',
        dataKey: 74
    },
    {
        key: 'K',
        name: 'TOM',
        dataKey: 75
    },
    {
        key: 'L',
        name: 'TINK',
        dataKey: 76
    },
]

export const DrumKit = () => {
    const [playing, setPlaying] = useState<number | null | undefined>(null)

    useEffect(()=> {
        window.addEventListener('keydown', (e: KeyboardEvent) => playSound(e))

        const keys = document.querySelectorAll('.key')

        // remove transition
        keys.forEach(key => 
            key.addEventListener('transitionend', () => setPlaying(null))
        ) 
    }, [])

    const playSound = (event?: KeyboardEvent, keyCode?: number) => {
        setPlaying(event?.keyCode || keyCode)

        const audio = document.querySelector(
            `audio[data-key='${keyCode || event?.keyCode}']`
        ) as HTMLAudioElement;

        if (!audio) return;

        audio.currentTime = 0 // rewind to the start
        audio.play()
    }

    return (
        <div className={s.container}>
            <div className={s.keysContainer} >
                <div className={`${s.keys} key`}>
                    {
                       drumKitKeys.map(el => (
                        <button 
                            key={el.key}
                            className={`${s.drumKeyBtn} ${playing == el.dataKey ? s.playing: ''} `}
                            onClick={() => playSound(undefined, el.dataKey)}
                        >
                            <kbd className={s.drumKey}>{el.key}</kbd>
                            <p className={s.drumKeyName}>{el.name}</p>
                        </button>
                       )) 
                    }
                </div>
            </div>
            <audio data-key='65' src={clap}/>
            <audio data-key='83' src={hihat}/>
            <audio data-key='68' src={kick}/>
            <audio data-key='70' src={openhat}/>
            <audio data-key='71' src={boom}/>
            <audio data-key='72' src={ride}/>
            <audio data-key='74' src={snare}/>
            <audio data-key='75' src={tom}/>
            <audio data-key='76' src={tink}/>
        </div>
    )
}