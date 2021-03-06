import React from 'react'

const boxSizeFactor = 6
const yFactor = 6
const background = '#673AB7'
const lineWidth = 40
const lines = 3
const boxes = 2

const getUpdatedY = (h, scale) => {
    return (h / yFactor) * Math.sin(scale * Math.PI)
}

const getSize = (w, h) => Math.min(w, h) / boxSizeFactor

const boxStyle = (i, w, h, scale) => {
    const size = getSize(w, h)
    const width = `${size}px`
    const height = `${size}px`
    const position = 'absolute'
    const x = w / 2 - size / 2
    const y = h / 2 - size / 2 + size / 2 * i - getUpdatedY(h, scale)
    const top = `${y}px`
    const left = `${x}px`
    return {left, top, position, width, height, background}
}

const getLineWidth = (w, h) => Math.min(w, h) / lineWidth

const lineStyle = (i, w, h, scale) => {
    const widthOfLine = getLineWidth(w, h)
    const size = getSize(w, h)
    const gap = (size - widthOfLine) / (lines - 1)
    const upH = getUpdatedY(h, scale)
    const x = w / 2 - size / 2 + gap * i
    const y = h / 2 - upH
    const left = `${x}px`
    const top = `${y}px`
    const position = 'absolute'
    const width = `${widthOfLine}px`
    const height = `${upH}px`
    return {left, top, position, background, width, height}
}

const Line = ({w, h, i, scale}) => {
    return (<div style = {lineStyle(i, w, h, scale)}></div>)
}

const Box = ({i, w, h, scale}) => {
    return <div style = {boxStyle(i, w, h, scale)}></div>
}

const getBoxes = (w, h, scale) => {
    const boxComponents = []
    for (var i = 0; i < boxes; i++) {
        boxComponents.push(<Box key = {`box_${i}`} w = {w} h = {h} i = {i} scale = {i == 0 ? scale : 0}/>)
    }
    return boxComponents
}

const getLines = (w, h, scale) => {
    const lineComponents = []
    for (var i = 0; i < lines; i++) {
        lineComponents.push(<Line key = {`line_${i}`} w = {w} h = {h} i = {i} scale = {scale}/>)
    }
    return lineComponents
}

const BiBoxLine = ({w, h, scale, onClick}) => {
    return <div onClick = {onClick}>
        {getLines(w, h, scale)}
        {getBoxes(w, h, scale)}
    </div>
}

export default BiBoxLine
