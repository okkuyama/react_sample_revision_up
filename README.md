# Usage

#### download files to your

```bash
$ git clone https://github.com/okkuyama/react_sample_revision_up.git
```

#### install packages

```bash
$ yarn install
```

## Deployment method including version control

### Preparation

#### Set shellscript permissions

```bash
$ chmod 755 ./deploy.sh
```

#### Change scp command setting of deploy.sh

```
scp ./dist/* {Your Host Name}:{Document Root Path} -i ~/.ssh/id_rsa -r
```

### Deploy

```bash
$ ./deploy.sh
```
