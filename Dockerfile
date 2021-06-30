FROM emscripten/emsdk

# clonning the right repos
RUN git clone https://github.com/newspeaklanguage/newspeak.git
RUN git clone https://github.com/newspeaklanguage/primordialsoup -b extraRevs
RUN git clone https://github.com/codemirror/CodeMirror.git -b 5.62.0

# install primordialsoup dependencies
RUN sudo apt-get update
RUN sudo apt-get -y install g++-multilib scons 

# build primordialsoup
RUN cd primordialsoup && ./build

# build newspeak
RUN cp -R CodeMirror newspeak/CodeMirror

# set emsdk vars
RUN . /emsdk/emsdk_env.sh

# remove the emsdk settings in build
RUN sed '2,6d' newspeak/build.sh > newspeak/new_build.sh
CMD cd newspeak && chmod 777 new_build.sh && ./new_build.sh







