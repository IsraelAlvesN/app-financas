import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Pix',
    value: '1.010,00',
    date: '12/09/2022',
    type: 1
  },
  {
    id: 3,
    label: 'Salário',
    value: '6.300,00',
    date: '30/09/2022',
    type: 1
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='Primeiro usuário'/>

        <Balance saldo="9.350,90" gastos="-600,00"/>

        <Actions />

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList 
          style={styles.list} 
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Movements data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});