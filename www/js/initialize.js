/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {

//         this.sendMessage;

//     },
    // sendMessage: function(){

    //     $('#sendSms').on('touchstart', function(){
    //         var $smsNum = $('#smsNum'),
    //             $smsBody = $('#smsBody'),
    //             number = $smsNum.val().trim(),
    //             message = $smsBody.val();

    //         if(number === '' || message === '') {
    //             alert("Please fill all fields.");
    //             return;
    //         }


    //         if(number.indexOf(";") >=0) {
    //             number = number.split(";");
    //             for(i in number) {
    //                 number[i] = number[i].trim();
    //             }
    //         }


    //         if(SMS){
    //             SMS.sendSMS(
    //                     number, 
    //                     message, 
    //                     function () { alert('Message sent successfully'); }, 
    //                     function (str) { alert('Message Failed:' + str); }
    //                 );
    //         }

    //     });

    // }
// };

// app.initialize();


'use strict';

var CordovaInit = function() {

    var onDeviceReady = function() {
        receivedEvent('deviceready');
    };

    var receivedEvent = function(event) {
        console.log('Start event received, bootstrapping application setup.');
        angular.bootstrap($('body'), ['smsApp']);
    };

    this.bindEvents = function() {
        document.addEventListener('deviceready', onDeviceReady, false);
    };

    //If cordova is present, wait for it to initialize, otherwise just try to
    //bootstrap the application.
    if (window.cordova !== undefined) {
        console.log('Cordova found, wating for device.');
        this.bindEvents();
    } else {
        console.log('Cordova not found, booting application');
        receivedEvent('manual');
    }
};

$(function(){
    new CordovaInit();
});

// angular.element(document).ready(function() {
//     new CordovaInit();
// });