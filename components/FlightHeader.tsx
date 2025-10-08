import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { X, Edit3 } from 'lucide-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Internal subcomponents (SRP)
type PressHandler = () => void;

function CloseButton({ onPress }: { onPress?: PressHandler }) {
  return (
    <TouchableOpacity style={styles.closeButton} activeOpacity={0.7} onPress={onPress}>
      <X size={20} color="#6B6B6B" strokeWidth={2} />
    </TouchableOpacity>
  );
}

function RouteRow() {
  return (
    <View style={styles.routeRow}>
      <Text style={styles.routeText}>BLR - Bangalore</Text>
      <MaterialCommunityIcons name="airplane" size={16} color="#9AA0A6" style={styles.planeIcon} />
      <Text style={styles.routeText}>CHN - Chennai</Text>
    </View>
  );
}

function DetailsRow() {
  return (
    <View style={styles.detailsRow}>
      <Text style={styles.detailsText}>Fri, 24 Oct - Fri, 24 Oct </Text>
      <View style={styles.separator} />
      <Text style={styles.detailsText}> 6 Adults</Text>
    </View>
  );
}

function FlightSummaryCard() {
  return (
    <View style={styles.flightCard}>
      <RouteRow />
      <DetailsRow />
    </View>
  );
}

function ModifyButton({ onPress }: { onPress?: PressHandler }) {
  return (
    <TouchableOpacity style={styles.modifyButton} activeOpacity={0.7} onPress={onPress}>
      <Edit3 size={12} color="#0078FF" strokeWidth={2} />
      <Text style={styles.modifyText}>Modify</Text>
    </TouchableOpacity>
  );
}

export default function FlightHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.title}>Change Flight</Text>
        <CloseButton />
      </View>

      <View style={styles.row2}>
        <FlightSummaryCard />
        <ModifyButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F4FF',
    borderRadius: 0,
    paddingHorizontal: 16,
    paddingVertical: 11,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0B0B0B',
  },
  closeButton: {
    padding: 3,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  flightCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 12,
    paddingVertical: 9,
    flex: 1,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  routeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0B0B0B',
  },
  planeIcon: {
    marginHorizontal: 6,
    transform: [{ rotate: '45deg' }],
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#5E5E5E',
  },
  separator: {
    width: 1.2,
    height: 14,
    backgroundColor: '#C7C7C7',
    marginHorizontal: 6,
  },
  modifyButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0078FF',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  modifyText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0078FF',
    marginTop: 4,
  },
});
