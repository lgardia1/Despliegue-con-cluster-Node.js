Vagrant.configure("2") do |config|

  config.vm.box = "debian/bullseye64"

  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.provision "shell", inline: <<-SHELL
     apt-get update -y
     apt-get upgrade -y
     apt-get install -y nodejs npm curl

     # Para tener la utlima version de node porque sino da problemas con loadtest
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
     source ~/.bashrc
     nvm install --lts

     # Dependencias globales para node
     npm install -g pm2
     npm install -g loadtest

    # Con cluster
     mkdir -p /home/vagrant/sincluster 
     cd /home/vagrant/sincluster 
     npm init -y
     npm install express
     cp -v /vagrant/config/sincluster/index.js /home/vagrant/sincluster/

     # Sin cluster
     mkdir -p /home/vagrant/concluster 
     cd /home/vagrant/concluster 
     npm init -y
     npm install express
     cp -v /vagrant/config/concluster/index.js /home/vagrant/concluster/
     cp -v /vagrant/config/concluster/ecosystem.config.js /home/vagrant/concluster
  SHELL
end
