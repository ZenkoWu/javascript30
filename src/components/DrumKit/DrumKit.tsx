import { useEffect, useState } from 'react'
import s from './DrumKit.module.css'
import { TDrumKitKeys } from '../../types'

export const DrumKit = ({drumKitKeys}: {drumKitKeys: TDrumKitKeys}) => {
    const [playing, setPlaying] = useState<number | null>()

    useEffect(()=> {
        const keydown = (e: KeyboardEvent) => playSound(e)
        window.addEventListener('keydown', keydown)

        const removeTransition = () => setPlaying(null)
        const keys = document.querySelectorAll('.drumKey')
        keys.forEach(key => key.addEventListener('transitionend', removeTransition)) 

        return () => {
            window.removeEventListener('keydown', keydown)
            keys.forEach(key => key.removeEventListener('transitionend', removeTransition)) 
        } 
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
                <div className={`${s.keys} drumKey`}>
                    {
                       drumKitKeys.map(el => (
                        <button 
                            key={el.key}
                            className={`${s.drumKeyBtn} ${playing === el.dataKey ? s.playing: ''} `}
                            onClick={() => playSound(undefined, el.dataKey)}
                        >
                            <kbd className={s.drumKey}>{el.key}</kbd>
                            <p className={s.drumKeyName}>{el.name}</p>
                        </button>
                       )) 
                    }
                </div>
            </div>
            {
                drumKitKeys.map(el => (
                    <audio data-key={`${el.dataKey}`} src={el.src} key={el.key}/>
                ))
            }
        </div>
    )
}