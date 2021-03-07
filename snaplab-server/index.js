const express = require('express')
const vision = require('@google-cloud/vision');
const formidable = require('formidable');
const firebase = require('firebase')
const {firebaseConfig} = require('./config')
const {parseDetections} = require('./parseDetections');

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const client = new vision.ImageAnnotatorClient();
const app = express()
const port = process.env.PORT || 8080;


const textToImage = async (filePath) => {
    const [result] = await client.textDetection(filePath);
    const detections = result.textAnnotations;
    return detections;
}


const classifyIngredients = async (parsedDetections) => {
    const ingredients = [];
    await database.ref('ingredients').once('value', (snap) => {
        snap.forEach((childNodes) => {
            if (parsedDetections.includes(childNodes.key)) {
                ingredients.push({id: childNodes.key, ...childNodes.val()})
            }
        })
    })
    return ingredients;
}

app.post('/report', (req, res, next) => {
    const form = formidable({multiples: true});
    form.parse(req, async (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        const detections = await textToImage(files.image.path);
        const parsedDetections = parseDetections(detections)
        const result = await classifyIngredients(parsedDetections);
        res.json({result});
    });
})

app.get('/import', async (req, res, next) => {
    const ingredientsRef = await database.ref('ingredients').set({
        aqua: {
            label: 'Aqua',
            type: 'good'
        },
        aluminumchlorohydrate: {
            label: 'Aluminum Chlorohydrate',
            type: 'good'
        },
        isoceteth20: {
            label: 'Isoceteth-20',
            type: 'good'
        },
        paraffinumliquidum: {
            label: 'Paraffinum Liquidum',
            type: 'good'
        },
        butyleneglycol: {
            label: 'Butylene Glycol',
            type: 'good'
        },
        glycerylisostearate: {
            label: 'Glyceryl Isostearate',
            type: 'good'
        },
        parfum: {
            label: 'Parfum',
            type: 'good'
        },
        benzylalcohol: {
            label: 'Benzyl Alcohol',
            type: 'bad'
        },
        laureth7citrate: {
            label: 'Laureth-7 Citrate',
            type: 'good'
        },
        sholudoteturnest: {
            label: 'sholudNotReturnTest',
            type: 'good'
        },
    })
    res.json({succes: 'YEEE'})
})

app.get('/', async (req, res, next) => {
    res.json({works: 'WORKS'})
})
app.listen(port, () => {
    console.log(`Example app listening`)
})
