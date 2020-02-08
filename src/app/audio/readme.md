An AudioContext interface, which contains an audio signal graph representing connections betweens AudioNodes.
An AudioNode interface, which represents audio sources, audio outputs, and intermediate processing modules. AudioNodes can be dynamically connected together in a modular fashion. AudioNodes exist in the context of an AudioContext
An AudioSourceNode interface, an abstract AudioNode subclass representing a node which generates audio.
An AudioDestinationNode interface, an AudioNode subclass representing the final destination for all rendered audio.

An AudioBuffer interface, for working with memory-resident audio assets. These can represent one-shot sounds, or longer audio clips.
An AudioBufferSourceNode interface, an AudioNode which generates audio from an AudioBuffer.

A MediaElementAudioSourceNode interface, an AudioNode which is the audio source from an audio, video, or other media element.
A ScriptProcessorNode interface, an AudioNode for generating or processing audio directly in JavaScript.
An AudioProcessingEvent interface, which is an event type used with ScriptProcessorNode objects.
An AudioParam interface, for controlling an individual aspect of an AudioNode's functioning, such as volume.
An GainNode interface, for explicit gain control. Because inputs to AudioNodes support multiple connections (as a unity-gain summing junction), mixers can be easily built with GainNodes.
A BiquadFilterNode interface, an AudioNode for common low-order filters such as:
Low Pass
       High Pass
       Band Pass
       Low Shelf
       High Shelf
       Peaking
       Notch
       Allpass
A DelayNode interface, an AudioNode which applies a dynamically adjustable variable delay.
An PannerNode interface, for spatializing / positioning audio in 3D space.
An AudioListener interface, which works with an PannerNode for spatialization.
A ConvolverNode interface, an AudioNode for applying a real-time linear effect (such as the sound of a concert hall).
A AnalyserNode interface, for use with music visualizers, or other visualization applications.
A ChannelSplitterNode interface, for accessing the individual channels of an audio stream in the routing graph.
A ChannelMergerNode interface, for combining channels from multiple audio streams into a single audio stream.
A DynamicsProcessorNode interface, an AudioNode for dynamic-shaping (compressor / expander) effects.
A WaveShaperNode interface, an AudioNode which applies a non-linear waveshaping effect for distortion and other more subtle warming effects.