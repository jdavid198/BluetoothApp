import React, { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useBLE } from '../hook/useBLE';
import DeviceModal from './DeviceConnectionModal';

export const BluetoothToogle = ({isEnabled, setIsEnabled}) => {

    const {connectToDevice,
        allDevices,
        requestPermissions,
        scanForPeripherals,
        disconnectFromDevice
      }=useBLE();

    const scanForDevices = async () => {
        const isPermissionsEnabled = await requestPermissions();
        if (isPermissionsEnabled) {
            scanForPeripherals();
        }
    };
    
    
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    useEffect(() => {
        if(isEnabled){
            openModal();
        }
        disconnectFromDevice();
    }, [isEnabled])
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const hideModal = () => {
        setIsModalVisible(false);
      };

      hideModalOffToogle=()=>{
        setIsModalVisible(false);
        setIsEnabled(previousState => !previousState);
      }
    
      const openModal = async () => {
        scanForDevices();
        setIsModalVisible(true);
      };

    const styles=StyleSheet.create({
        container:{
            flexDirection:"row",
            paddingVertical:25,
        },
        text:{
            fontSize:20,
            fontWeight:'bold',
            flex:1,
        },
        switch:{
            width:50,
        }
    })

  return (
    <View style={styles.container}>
        <Text style={styles.text}>ON</Text>
        <DeviceModal
        closeModal={hideModal}
        closeModalOffToogle={hideModalOffToogle}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />
        <Switch  style={styles.switch} 
        onValueChange={toggleSwitch}
        value={isEnabled}/>
    </View>
  )
}
