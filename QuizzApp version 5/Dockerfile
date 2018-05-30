FROM openjdk
VOLUME /tmp
ADD target/quizzApp2-1.0.jar usr/project/LoginAppDocker.jar
WORKDIR usr/project/
RUN sh -c 'touch LoginAppDocker.jar'
ENTRYPOINT ["java", "-Dspring.datasource.url=jdbc:mysql://mysqldb:3306/quizzApp", "-jar","LoginAppDocker.jar"]



#FROM openjdk:8-jdk-alpine
#VOLUME /tmp
#ADD target/quizzApp2-1.0.jar usr/project/LoginAppDocker.jar
#WORKDIR usr/project/
#RUN sh -c 'touch LoginAppDocker.jar'
#ENV JAVA_OPTS=""
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar
