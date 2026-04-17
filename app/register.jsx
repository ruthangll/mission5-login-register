import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const validatePhone = (value) => {
    const regex = /^[0-9]{10,}$/;
    return regex.test(value);
  };

  const handleRegister = () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      Alert.alert("Error", "Semua field wajib diisi");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Format email tidak valid");
      return;
    }

    if (!validatePhone(phone)) {
      Alert.alert("Error", "Nomor HP harus angka dan minimal 10 digit");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password minimal 6 karakter");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Password dan Confirm Password harus sama");
      return;
    }

    Alert.alert("Sukses", "Registrasi berhasil", [
      {
        text: "OK",
        onPress: () =>
          router.push({
            pathname: "/home",
            params: {
              name: name,
              email: email,
            },
          }),
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#F8F1E7" />

      <View style={styles.topLeftCircle} />
      <View style={styles.bottomRightCircle} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.pageTitle}>REGISTER PAGE</Text>
        <Text style={styles.pageSubtitle}>Create a secure social account</Text>

        <View style={styles.card}>
          <View style={styles.hero}>
            <Text style={styles.badge}>SIGN UP</Text>
            <Text style={styles.heroTitle}>Join The Protected App</Text>
            <Text style={styles.heroText}>
              Your data stays safer with validation and smooth register flow
            </Text>
          </View>

          <View style={styles.formSection}>
            <View style={styles.tabRow}>
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.inactiveTab}>Sign In</Text>
              </TouchableOpacity>

              <Text style={styles.activeTab}>Sign Up</Text>
            </View>

            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#6B7280"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

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
              placeholder="Phone Number"
              placeholderTextColor="#6B7280"
              value={phone}
              onChangeText={setPhone}
              keyboardType="numeric"
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

            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#6B7280"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.linkText}>Kembali ke login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  scrollContent: {
    flexGrow: 1,
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