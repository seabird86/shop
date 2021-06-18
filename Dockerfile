FROM httpd:2.4
ADD ./src/hub/dist/ /usr/local/apache2/htdocs/
ADD ./htdocs2 /usr/local/apache2/htdocs2
ADD ./httpd.conf /usr/local/apache2/conf/httpd.conf
#RUN /tmp/db.sh
