import React from 'react'
import {Dimensions} from 'react-native'
import moment from 'moment'

export const {width, height} = Dimensions.get('screen')

export const rawData = [
    {
        date : moment().format('DD-MM-YYYY'),
        day : moment().format('dddd'),
        task : [
            {
                title : 'Wakeup and go to the Office',
                description : 'Complete Task 1',
                completed : false,
                range : false,
                time : '9 am'
            },
            {
                title : 'Have Lunch and go for a walk',
                description : 'Complete Task 2',
                completed : false,
                range : true,
                start_time : '1 pm',
                end_time : '3 pm'
            },
            {
                title : 'Task 3',
                description : 'Complete Task 3',
                completed : true,
                range : true,
                start_time : '1 pm',
                end_time : '3 pm'
            },
            {
                title : 'Task 4',
                description : 'Complete Task 4',
                completed : false,
                range : false,
                time : '9:30 pm'
            },
            {
                title : 'Task 5',
                description : 'Complete Task 5',
                completed : true,
                range : true,
                start_time : '1 pm',
                end_time : '3 pm'
            },
            
        ]
    },
    {
        date : moment('DD-MM-YYYY').add(1,'days'),
        day : moment().add(1,'days').format('dddd'),
        task : [
            {
                title : 'Task 1',
                description : 'Complete Task 1',
                completed : false,
                range : false,
                time : '9 am'
            },
            {
                title : 'Task 2',
                description : 'Complete Task 2',
                completed : false,
                range : true,
                start_time : '1 pm',
                end_time : '3 pm'
            },
            {
                title : 'Task 3',
                description : 'Complete Task 3',
                completed : false,
                range : false,
                time : '9 pm'
            },
            {
                title : 'Task 4',
                description : 'Complete Task 4',
                completed : false,
                range : false,
                time : '9:30 pm'
            },
            {
                title : 'Task 5',
                description : 'Complete Task 5',
                completed : false,
                range : false,
                time : '11 pm'
            }
        ]
    },
    // {
    //     date : moment('DD-MM-YYYY').add(2,'days'),
    //     day : moment().add(2,'days').format('dddd'),
    //     task : [
    //         {
    //             title : 'Task 1',
    //             description : 'Complete Task 1',
    //             completed : false,
    //             range : false,
    //             time : '9 am'
    //         },
    //         {
    //             title : 'Task 2',
    //             description : 'Complete Task 2',
    //             completed : false,
    //             range : true,
    //             start_time : '1 pm',
    //             end_time : '3 pm'
    //         },
    //         {
    //             title : 'Task 3',
    //             description : 'Complete Task 3',
    //             completed : false,
    //             range : false,
    //             time : '9 pm'
    //         },
    //         {
    //             title : 'Task 4',
    //             description : 'Complete Task 4',
    //             completed : false,
    //             range : false,
    //             time : '9:30 pm'
    //         },
    //         {
    //             title : 'Task 5',
    //             description : 'Complete Task 5',
    //             completed : false,
    //             range : false,
    //             time : '11 pm'
    //         }
    //     ]
    // },
    // {
    //     date : moment('DD-MM-YYYY').add(3,'days'),
    //     day : moment().add(3,'days').format('dddd'),
    //     task : [
    //         {
    //             title : 'Task 1',
    //             description : 'Complete Task 1',
    //             completed : false,
    //             range : false,
    //             time : '9 am'
    //         },
    //         {
    //             title : 'Task 2',
    //             description : 'Complete Task 2',
    //             completed : false,
    //             range : true,
    //             start_time : '1 pm',
    //             end_time : '3 pm'
    //         },
    //         {
    //             title : 'Task 3',
    //             description : 'Complete Task 3',
    //             completed : false,
    //             range : false,
    //             time : '9 pm'
    //         },
    //         {
    //             title : 'Task 4',
    //             description : 'Complete Task 4',
    //             completed : false,
    //             range : false,
    //             time : '9:30 pm'
    //         },
    //         {
    //             title : 'Task 5',
    //             description : 'Complete Task 5',
    //             completed : false,
    //             range : false,
    //             time : '11 pm'
    //         }
    //     ]
    // }
]