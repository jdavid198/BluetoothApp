import React, { useState } from 'react'
import { FlatList, Text } from 'react-native';
import { useBLE } from '../hook/useBLE';
import { BluetoothListLayout } from '../component/BluetoohtListLayout';
import { BluetoothToogle } from '../component/BluetoothToogle';
import { Empty } from '../component/Empty';
import { Subtitle } from '../component/Subtitle';

export const BluetoothList = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  
  listData=[
    {
      name:"dato 1",
      key:1
    },
    {
      name:"dato 2",
      key:2
    }
  ]

  const renderEmpty=()=><Empty label="No hay información" />;

  return (
    <BluetoothListLayout title={'Bluetooth'}>
      <BluetoothToogle isEnabled={isEnabled} setIsEnabled={setIsEnabled}/>
      <Subtitle title="Información recibida"/>
      <FlatList data={listData} ListEmptyComponent={renderEmpty} renderItem={({item}) => <Text>{item.name}</Text>} />
    </BluetoothListLayout>
  )
}
