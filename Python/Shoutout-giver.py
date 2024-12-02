import win32com.client as wincl 
# list = ["Rohan", "Rajju", "Jeet", "Shreya", "Ananya","Prakriti" ,"maa chuda"]
a = input ("Your Name: ")
speaker_number = 1
spk = wincl.Dispatch("SAPI.SpVoice")
vcs = spk.GetVoices()
SVSFlag = 11
print(vcs.Item (speaker_number) .GetAttribute ("Name"))
spk.Voice
spk.SetVoice(vcs.Item(speaker_number))
spk.Speak("Hello, I'm Zira")
spk.Speak(f"u {a} mother fucker, ass hole, you know who my father is, u son of a bitch, your dick with 2 inches, no one gives a fuck about u, die bitch")
# for i in list:
#     spk.Speak(f"Shout-out to {i}")