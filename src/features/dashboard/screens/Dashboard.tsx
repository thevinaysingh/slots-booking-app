import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  LogBox,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DashboardScreen} from '../../../app/navigation/enums/DashboardScreen';
import {DashboardNavigatorParamsList} from '../../../app/navigation/params/DashboardNavigatorParamsList';
import {ButtonRoundedFilled} from '../../../common/components/Button';
import {HeaderText} from '../../../common/components/HeaderText';
import {NavigationBar} from '../../../common/components/NavigationBar';
import {getItemLayout} from '../../../constants/Layout';
import DependencyContext from '../../../services/di/DependencyContext';
import {Slot, SlotSection} from '../../../services/server/LocalServer';
import {SlotListItem, slotListItemHeight} from '../components/SlotListItem';
import {dashboardRepositoryInjectionKey} from '../injection-keys';

LogBox.ignoreAllLogs();

export const Dashboard: React.FC<{
  navigation: NativeStackNavigationProp<
    DashboardNavigatorParamsList,
    DashboardScreen.Dashboard
  >;
}> = ({navigation}) => {
  const dependencies = React.useContext(DependencyContext);
  const dashboardRepository = dependencies.provide(
    dashboardRepositoryInjectionKey,
  );

  const [slotsSection, setSlotsSection] = React.useState<SlotSection[]>([]);
  const [selectedSlots, setSelectedSlots] = React.useState<string[]>([]);

  const fetchSlots = React.useCallback(() => {
    dashboardRepository
      .fetchSlots()
      .then(slots => {
        setSlotsSection(slots);
      })
      .catch(_error => {
        // TODO: Handle error
      });
  }, [dashboardRepository]);

  const fetchBookedSlots = React.useCallback(() => {
    dashboardRepository
      .fetchBookedSlots()
      .then(slots => {
        setSelectedSlots([...slots]);
      })
      .catch(_error => {
        // TODO: Handle error
      });
  }, [dashboardRepository]);

  React.useEffect(() => {
    fetchBookedSlots();
    fetchSlots();
  }, [fetchSlots, fetchBookedSlots]);

  const onBookAppointments = () => {
    dashboardRepository
      .bookAppointments(selectedSlots)
      .then(_booked => {
        fetchBookedSlots();
        fetchSlots();
        Alert.alert('Success', 'Appointments booked successfully');
      })
      .catch(e => {
        Alert.alert('Error', e.message);
      });
  };

  const onPressSlot = (item: Slot) => {
    const index = selectedSlots.indexOf(item.slotId);

    if (index > -1) {
      selectedSlots.splice(index, 1);
      setSelectedSlots([...selectedSlots]);
    } else {
      selectedSlots.push(item.slotId);
      setSelectedSlots([...selectedSlots]);
    }
  };

  const onPressProfile = () => {
    navigation.navigate(DashboardScreen.Profile);
  };

  const renderSectionHeader = ({section: {title}}: {section: SlotSection}) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  const renderItem = ({item}: {item: Slot}) => (
    <SlotListItem
      item={item}
      onPressSlot={onPressSlot}
      selectedSlots={selectedSlots}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar title="Dashboard">
        <TouchableOpacity style={styles.profileBtn} onPress={onPressProfile}>
          <Text style={styles.profileBtnText}>Profile</Text>
        </TouchableOpacity>
      </NavigationBar>
      <View style={styles.body}>
        <View style={styles.container}>
          {slotsSection.length === 0 && <ActivityIndicator size="large" />}
          <ScrollView nestedScrollEnabled>
            <HeaderText style={styles.bodyHeaderText}>
              3 Days Appointment List
            </HeaderText>
            {slotsSection.map(section => {
              return (
                <View key={section.id}>
                  {renderSectionHeader({section})}
                  <FlatList
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={section.data}
                    numColumns={2}
                    keyExtractor={item => item.slotId}
                    getItemLayout={(_data, index) =>
                      getItemLayout(index, slotListItemHeight)
                    }
                    renderItem={renderItem}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <ButtonRoundedFilled
          disabled={selectedSlots.length === 0}
          onPress={onBookAppointments}>
          <Text style={styles.btnText}>Book Appointments</Text>
        </ButtonRoundedFilled>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  bodyHeaderText: {
    fontSize: 24,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
    color: 'black',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  profileBtn: {
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
  },
  profileBtnText: {
    fontSize: 16,
    color: 'black',
  },
  createAccBtn: {
    alignSelf: 'center',
    marginTop: 40,
  },
  createAccTtnText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(10, 132, 255, 1)',
  },
});

export default Dashboard;
