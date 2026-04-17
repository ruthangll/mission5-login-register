import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const getNameFromEmail = (value) => {
    const username = value.split("@")[0];
    return (
      username
        .replace(/[0-9]/g, "")
        .replace(/[._-]+/g, " ")
        .trim()
        .split(" ")
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || "User"
    );
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan password wajib diisi");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Format email tidak valid");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password minimal 6 karakter");
      return;
    }

    const generatedName = getNameFromEmail(email);

    router.push({
      pathname: "/home",
      params: {
        name: generatedName,
        email: email,
      },
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F1E7" />

      <View style={styles.topLeftCircle} />
      <View style={styles.bottomRightCircle} />

      <View style={styles.content}>
        <Text style={styles.pageTitle}>LOGIN PAGE</Text>
        <Text style={styles.pageSubtitle}>Access your protected social account</Text>

        <View style={styles.card}>
          <View style={styles.hero}>
            <Text style={styles.badge}>SECURE ACCESS</Text>
            <Text style={styles.heroTitle}>Protect The Network</Text>
            <Text style={styles.heroText}>
              Safe login experience with clean UI and secure flow
            </Text>
          </View>

          <View style={styles.formSection}>
            <View style={styles.tabRow}>
              <Text style={styles.activeTab}>Sign In</Text>

              <TouchableOpacity onPress={() => router.push("/register")}>
                <Text style={styles.inactiveTab}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#6B7280"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#6B7280"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={styles.linkText}>Belum punya akun? Daftar sekarang</Text>
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
  formSection: {
    paddingHorizontal: 22,
    paddingVertical: 24,
    backgroundColor: "#F9F9F9",
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
    paddingHorizontal: 6,
  },
  activeTab: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0B132B",
    borderBottomWidth: 4,
    borderBottomColor: "#F4A300",
    paddingBottom: 6,
  },
  inactiveTab: {
    fontSize: 18,
    fontWeight: "700",
    color: "#A1A1AA",
  },
  input: {
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 15,
    color: "#111827",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#F4A300",
    paddingVertical: 17,
    borderRadius: 999,
    marginTop: 6,
    marginBottom: 16,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },
  linkText: {
    textAlign: "center",
    color: "#C97D00",
    fontWeight: "700",
    fontSize: 14,
  },
};