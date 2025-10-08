import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { X, Plane, Edit3 } from 'lucide-react-native';

export default function FlightHeader() {
  return (
    <View style={styles.container}>
      {/* Row 1: Title and Close Button */}
      <View style={styles.row1}>
        <Text style={styles.title}>Change flight</Text>
        <TouchableOpacity style={styles.closeButton} activeOpacity={0.7}>
          <X size={10} color="#6B6B6B" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {/* Row 2: Flight Details Card and Modify Button */}
      <View style={styles.row2}>
        <View style={styles.flightCard}>
          <View style={styles.routeRow}>
            <Text style={styles.routeText}>BLR- Bangalore</Text>
            <Plane size={14} color="#999999" style={styles.planeIcon} />
            <Text style={styles.routeText}>Chn- Chennai</Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailsText}>Fri, 24 Oct - Fri, 24 Oct</Text>
            <View style={styles.separator} />
            <Text style={styles.detailsText}>6 Adults</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.modifyButton} activeOpacity={0.7}>
          <Edit3 size={11} color="#0078FF" strokeWidth={2} />
          <Text style={styles.modifyText}>Modify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F4FF',
    borderRadius: 6,
    padding: 11,
    width: '100%',
    maxWidth: 364,
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
    fontSize: 11,
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
    borderRadius: 6,
    padding: 11,
    paddingVertical: 8,
    flex: 1,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  routeText: {
    fontSize: 10.5,
    fontWeight: '600',
    color: '#0B0B0B',
  },
  planeIcon: {
    marginHorizontal: 6,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 10,
    fontWeight: '400',
    color: '#5E5E5E',
  },
  separator: {
    width: 1,
    height: 10,
    backgroundColor: '#C7C7C7',
    marginHorizontal: 6,
  },
  modifyButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1.4,
    borderColor: '#0078FF',
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 11,
    minWidth: 56,
    minHeight: 49,
  },
  modifyText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#0078FF',
    marginTop: 4,
  },
});
