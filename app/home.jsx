import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const { name, email } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F1E7" />

      <View style={styles.topLeftCircle} />
      <View style={styles.bottomRightCircle} />

      <View style={styles.content}>
        <Text style={styles.pageTitle}>HOME PAGE</Text>
        <Text style={styles.pageSubtitle}>Protected user dashboard</Text>

        <View style={styles.card}>
          <View style={styles.hero}>
            <Text style={styles.badge}>WELCOME</Text>
            <Text style={styles.heroTitle}>Secure Access Granted</Text>
            <Text style={styles.heroText}>
              Your login and registration flow are working properly.
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.helloText}>Hello,</Text>
            <Text style={styles.nameText}>{name || "User"} 👋</Text>
            <Text style={styles.emailText}>{email || "-"}</Text>

            <Text style={styles.descText}>
              You have successfully entered the protected area of the app.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F8F1E7",
  },
  topLeftCircle: {
    position: "absolute",
    top: -80,
    left: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#F4A300",
  },
  bottomRightCircle: {
    position: "absolute",
    bottom: -90,
    right: -90,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "#F4A300",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  pageTitle: {
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
    color: "#0B132B",
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 8,
  },
  hero: {
    backgroundColor: "#F4A300",
    paddingHorizontal: 24,
    paddingVertical: 30,
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#CC8700",
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 12,
    letterSpacing: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
  },
  heroText: {
    fontSize: 14,
    color: "#FFF7E6",
    textAlign: "center",
    lineHeight: 21,
  },
  infoSection: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 28,
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
  helloText: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 6,
  },
  nameText: {
    fontSize: 30,
    fontWeight: "900",
    color: "#0B132B",
    textAlign: "center",
    marginBottom: 8,
  },
  emailText: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 14,
  },
  descText: {
    fontSize: 15,
    color: "#4B5563",
    textAlign: "center",
    lineHeight: 23,
    marginBottom: 28,
  },
  button: {
    backgroundColor: "#F4A300",
    paddingVertical: 17,
    borderRadius: 999,
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },
};