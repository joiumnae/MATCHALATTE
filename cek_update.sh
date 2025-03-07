#!/bin/bash

# Masuk ke folder tempat script ini berada
cd "$(dirname "$0")" || exit

# Loop untuk cek update setiap 5 menit
while true; do
    # Ambil commit terbaru dari GitHub
    latest_commit=$(curl -s https://api.github.com/repos/Gxyenn/XlesyVIPenc/commits | jq -r '.[0].sha')

    # Baca commit terakhir yang tersimpan di file
    if [ -f last_commit.txt ]; then
        last_commit=$(cat last_commit.txt)
    else
        last_commit=""
    fi

    # Jika ada update, tarik perubahan dan tampilkan notifikasi
    if [ "$latest_commit" != "$last_commit" ]; then
        echo "$latest_commit" > last_commit.txt

        # Tarik update terbaru
        git pull --quiet

        # Notifikasi di Termux
        termux-notification --title "GitHub Update" --content "✅ XlesyVIP Telah Update!" --priority high
    fi

    # Tunggu 5 menit sebelum cek lagi
    sleep 300
done
